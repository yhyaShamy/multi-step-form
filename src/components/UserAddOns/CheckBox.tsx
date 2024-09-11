type CheckBoxProps = {
  checked: boolean;
  toggle: () => void;
};

export default function CheckBox({ checked, toggle }: CheckBoxProps) {
  return (
    <div
      className={`size-6 md:size-8 rounded-lg border-secondary-800 border cursor-pointer ${
        checked ? "bg-primary-800" : ""
      } flex items-center justify-center transition-colors duration-300`}
      onClick={toggle}
    >
      <p className="text-secondary-500">&#10003;</p>
    </div>
  );
}
