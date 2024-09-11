import { THeaderProp } from "../../types/global";

export default function Header({ head, text }: THeaderProp) {
  return (
    <div className="space-y-4 mb-7 md:mb-10">
      <h1 className="text-3xl md:text-4xl text-primary-900 font-bold">
        {head}
      </h1>
      <p className="text-lg md:text-xl text-secondary-900">{text}</p>
    </div>
  );
}
