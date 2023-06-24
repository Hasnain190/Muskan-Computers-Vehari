

interface TagProps {

    category: string;
}

export default function Tag({ category }: TagProps) {
    return (
        <div className="tag px-3 bg-lightBlue rounded-xl w-fit hover:bg-primary cursor-pointer text-black hover:text-white transition mx-4">
            {category}
        </div>
    );
}

