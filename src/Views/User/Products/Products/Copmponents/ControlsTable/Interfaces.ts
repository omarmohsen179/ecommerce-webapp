export interface ProductBasicsInformation {
  Id: number;
  Domain?: "eg" | "tr" | "ly";
  IsActive: boolean;
  ShowInHeader: boolean;
  ProductName: string;
  ProductNameEn: string;
  Rank?: number;
  CategoryId: number;
  CategoryName?: string;
  Icon: any;
  Link: any;
  IconPath?: any;
  DomainId: number;
  TrialDuration: number;
}

export interface Control {
  Id: number;
  IsActive: boolean;
  Image: any;
  Image2?: any;
  TitleEn: string;
  Title: string;
  SubTitleEn: string;
  SubTitle: string;
  DescriptionEn: string;
  Description: string;
  QuoteEn: string;
  Quote: string;
  ProductId: number;
}

export interface Benefit {
  Id: number;
  Image: any;
  TitleEn: string;
  Title: string;
  DescriptionEn: string;
  Description: string;
  IsActive: boolean;
  ProductId: number;
}

export interface Question {
  Id: number;
  Question: string;
  QuestionEn: string;
  Answer: string;
  AnswerEn: string;
  Rank: number;
  IsActive: boolean;
  ProductId: number;
}

export interface AdditionalInfo {
  Id: number;
  Title: string;
  TitleEn: string;
  Description: string;
  DescriptionEn: string;
  IsActive: boolean;
  ProductId: number;
}

export interface ControlsInformation {
  Id: number;
  Title: string;
  TitleEn: string;
  Description: string;
  DescriptionEn: string;
  IsActive: boolean;
  ProductId: number;
}

export interface Demo {
  ProductId: number;
  Tip: string;
  TipEn: string;
  Description: string;
  DescriptionEn: string;
  Image: any;
  ImagePath?: any;
}

export interface DarkSection {
  ProductId: number;
  Title: string;
  TitleEn: string;
  ButtonTitle: string;
  ButtonTitleEn: string;
  Description: string;
  DescriptionEn: string;
}

export interface Header {
  ProductId: number;
  Title: string;
  TitleEn: string;
  SubTitle: string;
  SubTitleEn: string;
  DemoVideoUrl: string;
  Image: any;
}

export interface Product {
  ProductBasicsInformation?: ProductBasicsInformation;
  ProductHeader?: Header;
  ProductControls?: Control[];
  ProductBenefits?: Benefit[];
  ProductQuestions?: Question[];
  ProductAdditionalInfos?: AdditionalInfo[];
  ProductControlInformation?: ControlsInformation[];
  ProductDemo?: Demo;
  ProductDarkSection?: DarkSection;
  ProductText?: ProductText;
  ProductImages?: ProductImages[];
  ProductPricing?: any;
  SubscriptionPrices?: any;
}
export interface ProductImages {
  Id: number;
  ProductId: number;
  ImagePath: string;
  Title: string;
  TitleEn: string;
}

export interface Category {
  Id: number;
  Title: string;
  TitleEn: string;
  Description: string;
  DescriptionEn: string;
  ProductsCount?: number;
  Rank?: number;
  CategoryId: number;
}
export interface ProductText {
  ProductId: number;
  Title: string;
  TitleEn: string;
  Description: string;
  DescriptionEn: string;
}
export interface ProductTextinputform {
  productId: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}
export const ProductTextinputDefualt = {
  ProductId: 0,
  Title: "",
  TitleEn: "",
  Description: "",
  DescriptionEn: "",
};
