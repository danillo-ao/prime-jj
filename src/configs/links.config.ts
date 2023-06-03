import { values } from '@/configs/values.config';

export const url_message =
  'Olá! Por favor, eu gostaria de mais informações sobre os treinos de JiuJitsu na Prime!';
export const schedule_message =
  'Olá! Eu gostaria de agendar um treino experimental de JiuJitsu na Prime!';
export const plan_message = (name: string) =>
  `Olá! eu tenho interesse em adquirir o plano ${name.toUpperCase()} na Prime!`;

const whats_number = values.phone;
export const links = {
  whatsapp_plan: (name: string) =>
    `https://api.whatsapp.com/send/?phone=${whats_number}&text=${plan_message(
      name,
    )}&type=phone_number&app_absent=0`,

  whatsapp: `https://api.whatsapp.com/send/?phone=${whats_number}&text=${url_message}&type=phone_number&app_absent=0`,
  whatsapp_schedule: `https://api.whatsapp.com/send/?phone=${whats_number}&text=${schedule_message}&type=phone_number&app_absent=0`,
  instagram: 'https://www.instagram.com/primejiujitsu/',
  facebook: 'https://www.facebook.com/PrimeJiuJitsu',

  waze: 'https://waze.com/ul/h6gyckgf5e',
  uber: 'https://m.uber.com/ul/?action=setPickup&client_id=pwIMtqdUyYr7SZ4VdkP4f5lbze9xBiDB&pickup=my_location&dropoff[formatted_address]=R.%20S%C3%A3o%20Francisco%2C%2055%20-%20Vila%20Valparaiso%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009060-420%2C%20Brazil&dropoff[latitude]=-23.665271&dropoff[longitude]=-46.546224',
};
