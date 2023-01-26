type Children = {
  children: JSX.Element;
};

type Base = {
  createdAt: string;
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured: boolean;
  image: {
    url: string;
  };
  Categories: [];
  author: {
    id: string;
    name: string;
    role: string;
    availability: string;
    profileImage: {
      id: string;
      url: string;
    };
  };
};

type Button = {
  title: string;
  clickhandler?: () => void;
};

interface Categories {
  name: string;
}

interface Post extends Base {
  content: raw[];
}

interface Blog {
  post: {
    [x: string]: any;
    title: string;
    slug: string;
    image: {
      url: string;
    };
    Categories: [];
  };
}

type PostComment = {
  name: string;
  comment: string;
  email: string;
  slug: string | string[] | undefined;
};
