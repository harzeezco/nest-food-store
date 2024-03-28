type CtaProps = {
  btn: string;
  desc: string;
  href: string;
  src: string;
  title: string;
};

export const CTA_DETAILS: CtaProps[] = [
  {
    src: 'template1.png',
    title: 'Thousands of free templates',
    desc: 'Free and easy way to bring your ideas to life',
    href: '/shop',
    btn: 'Explore More'
  },
   {
    src: 'template2.png',
    title: 'Create your unique style',
    desc: 'Free and easy way to bring your ideas to life',
    href: '/create',
    btn: 'Shop Now'
   }
];
