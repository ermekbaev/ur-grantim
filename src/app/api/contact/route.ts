import { createTransport } from 'nodemailer';
import { object, nonempty, trimmed, string } from 'superstruct';

import { phoneStruct, emailStruct } from '~/guards/refinements';

const struct = object({
  name: nonempty(trimmed(string())),
  phone: phoneStruct(nonempty(trimmed(string()))),
  email: emailStruct(nonempty(trimmed(string()))),
});

const transporter = createTransport({
  service: 'gmail',
  auth: { user: 'ooo.umnye.resheniya@gmail.com', pass: 'frya padv wfka gsic' },
});

export async function POST(request: Request) {
  try {
    const body = struct.validate(await request.json())[1];
    if (!body) return new Response(null, { status: 400 });

    await transporter.sendMail({
      from: 'ooo.umnye.resheniya@gmail.com',
      to: 'mail@urstartup.ru',
      subject: '❗️❗️❗️НОВАЯ ЗАЯВКА НА БУХГАЛТЕРСКОЕ ОБСЛУЖИВАНИЕ❗️❗️❗️',

      html: Object.entries({
        Имя: body.name,
        'Номер телефона': body.phone,
        'Электронная почта': body.email,
      })
        .map(([key, value]) => `<p>${key}: ${value}</p>`)
        .join(''),
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error(error);
    return new Response(null, { status: 500 });
  }
}
