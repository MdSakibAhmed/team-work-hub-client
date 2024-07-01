export interface TDocument {
    _id?: string;
    title:string;
    content: string;
  
  }

  export type  TFeedback = {
    userId: {username:string},
    content:string
  }

  export type ChangeHandler = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  export type FormSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>
  ) => void;