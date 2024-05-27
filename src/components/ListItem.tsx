import Link from "next/link";

type ListItemPropsType = {
  title: string;
  subtitle: string;
  isCurrent: boolean;
  link: string;
};

const ListItem = (props: ListItemPropsType) => {
  const { title, subtitle, isCurrent, link } = props;
  return (
    <li className="mb-4 p-2 ms-4 hover:bg-[#010101]">
      <Link href={link} referrerPolicy="no-referrer" target="_blank">
      <div
        className={`absolute w-3 h-3 ${
          isCurrent ? "bg-gray-500" : "bg-gray-200"
        } rounded-full mt-1.5 -start-1.5 border`}
      ></div>
      <div className="flex flex-row items-center gap-2">
        <div className="text-md font-medium text-gray-50">{title}</div>
        {isCurrent && (
          <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
            present
          </div>
        )}
      </div>
      <div className="text-sm font-normal text-gray-500">{subtitle}</div>
      </Link>
    </li>
  );
};

export default ListItem;
