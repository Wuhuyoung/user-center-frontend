import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '蚂蚁集团体验技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Gitee',
          title: 'Gitee',
          href: 'https://gitee.com/wuhuyoung',
          blankTarget: true,
        },
        {
          key: 'Han github',
          title: <><GithubOutlined/> Han GitHub</>,
          href: 'https://github.com/Wuhuyoung',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined /> GitHub</>,
          href: 'https://github.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
