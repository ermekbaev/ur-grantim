/* eslint-disable unicorn/no-useless-undefined */

'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FC,
  type MouseEventHandler,
} from 'react';

import { IconButton } from '~/components/buttons/IconButton';
import { ChevronRight, Close, Menu } from '~/icons/material';
import { SmartSolutionsLogo } from '~/icons/others';
import * as styles from './styles.css';

type UseSyncExternalStoreSubscribe = Parameters<typeof useSyncExternalStore>[0];

const subscribeToWindowResize: UseSyncExternalStoreSubscribe = (
  onStoreChange,
) => {
  window.addEventListener('resize', onStoreChange);
  return () => window.removeEventListener('resize', onStoreChange);
};

export interface HeaderProps {
  servicesSectionId: string;
  workStagesSectionId: string;
  benefitsSectionId: string;
  contactsSectionId: string;
}

export const Header: FC<HeaderProps> = ({
  servicesSectionId,
  workStagesSectionId,
  benefitsSectionId,
  contactsSectionId,
}) => {
  const headerRef = useRef<HTMLElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const listener = () => {
      const headerElement = headerRef.current;
      if (!headerElement) return;

      const currentScrollY = window.scrollY;
      const headerHeight = headerElement.getBoundingClientRect().height;

      if (currentScrollY < prevScrollY) setIsHeaderVisible(true);
      else if (currentScrollY > headerHeight) setIsHeaderVisible(false);

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  const menuRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const savedScrollYRef = useRef<number | undefined>(undefined);
  const controllerRef = useRef<AbortController | undefined>(undefined);

  const openMenu = () => {
    setIsMenuOpen(true);
    savedScrollYRef.current = window.scrollY;
    controllerRef.current = new AbortController();

    menuRef.current?.addEventListener(
      'transitionend',
      () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.body.style.overflow = 'hidden';
      },
      { once: true, signal: controllerRef.current.signal },
    );
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    controllerRef.current?.abort();

    document.body.style.overflow = 'visible';
    window.scrollTo({ top: savedScrollYRef.current, behavior: 'instant' });

    requestAnimationFrame(() => setIsHeaderVisible(true));
  };

  const handleMenuClick: MouseEventHandler<HTMLElement> = (event) => {
    if (!(event.target instanceof Element)) return;

    const sectionId = event.target.closest('a')?.getAttribute('href')?.slice(1);
    if (!sectionId) return;

    // eslint-disable-next-line unicorn/prefer-query-selector
    const sectionElement = document.getElementById(sectionId);
    if (!sectionElement) return;

    closeMenu();
    event.preventDefault();

    requestAnimationFrame(() => {
      let scrollByTop: number;
      const sectionTop = sectionElement.getBoundingClientRect().top;

      if (sectionTop >= 0) {
        scrollByTop = sectionTop;
      } else {
        const headerHeight = headerRef.current?.getBoundingClientRect().height;
        scrollByTop = sectionTop - (headerHeight || 0);
      }

      sectionElement.focus();
      window.scrollBy({ top: scrollByTop });
    });
  };

  const screenHeight = useSyncExternalStore(
    subscribeToWindowResize,
    () => window.screen.height,
    () => undefined,
  );

  return (
    <header
      ref={headerRef}
      className={styles.headerRecipe({ hidden: !isHeaderVisible })}
      style={assignInlineVars({
        [styles.headerScreenHeightVar]: `${screenHeight}px`,
      })}
    >
      <div className={styles.headerContentClass}>
        <SmartSolutionsLogo className={styles.headerLogoClass} />

        <IconButton
          variant="standard"
          icon={isMenuOpen ? Close : Menu}
          onClick={isMenuOpen ? closeMenu : openMenu}
          className={styles.headerMenuBtnClass}
        />

        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <nav
          ref={menuRef}
          onClick={handleMenuClick}
          className={styles.headerMenuRecipe({ isOpen: isMenuOpen })}
        >
          <ul className={styles.headerMenuListClass}>
            {[
              { title: 'Услуги', id: servicesSectionId },
              { title: 'Этапы работы', id: workStagesSectionId },
              { title: 'Преимущества', id: benefitsSectionId },
              { title: 'Контакты', id: contactsSectionId },
            ].map(({ id, title }) => (
              <li key={id} className={styles.headerMenuListItemClass}>
                <a href={`#${id}`} className={styles.headerMenuLinkClass}>
                  {title}

                  <ChevronRight
                    aria-hidden
                    className={styles.headerMenuLinkIconClass}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
