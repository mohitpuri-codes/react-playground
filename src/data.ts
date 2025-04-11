interface Data {
  component: CardDetails;
  JSX: CardDetails;
  props: CardDetails;
}

export interface CardDetails {
  title: string;
  description: string;
}

export const data: Data = {
  component: {
    title: "component ",
    description: "descrption of component",
  },
  JSX: {
    description: "JSX",
    title: "desc of jsx",
  },
  props: {
    title: "props",
    description: "desc of props",
  },
} as const;
