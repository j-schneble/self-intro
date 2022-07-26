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
    return: '"A developer that believes in discovering the "why." As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software."',
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