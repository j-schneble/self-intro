const style = (props) =>
  `color: var(--chakra-colors-brand-${
    props.colorMode === 'light' ? '600' : '300'
  });font-weight: 500;`;

const info = (props: any): { input: string; return: string }[] => [
  {
    input: 'self.learnAboutMe()',
    return: 'Loaded data...',
  },
  {
    input: 'self.developmentPassion',
    return: '"Hello, my name is Jack. I build responsive web applications that are efficient, fast, and acessible to all."',
  },
  {
    input: 'self.uiPassion',
    return: '"Design encompasses the internal functionality of a product as well as the overall user experience. I strive to develop interfaces and experiences that people can enjoy on all digital mediums."',
  },
  {
    input: 'self.contactMe()',
    return: `["<a style="${style(
      props
    )}" rel="noopener" href="https://www.linkedin.com/in/jack-schnebleb/">LinkedIn</a>", "<a style="${style(
      props
    )}" rel="noopener" href="https://github.com/j-schneble">Github</a>", "<a rel="noopener" style="${style(
      props
    )}" href="https://www.instagram.com/accounts/login/">Instagram</a>"]`,
  },
];

export default info;