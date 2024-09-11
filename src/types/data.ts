export type TUserPlan = {
  image: string;
  title: string;
  price: number;
  extra?: string;
  duration: "yearly" | "monthly";
};

export type TUserAddOnsObj = {
  title: string;
  descreption: string;
  price: number;
  id: number;
};

export type TUserPlans = {
  yearlyPlan: TUserPlan[];
  monthlyPlan: TUserPlan[];
};

export type TUserAddOns = {
  yearlyPlans: TUserAddOnsObj[];
  monthlyPlans: TUserAddOnsObj[];
};
