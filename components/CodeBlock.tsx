
interface CodeBlockProps {
    text : string
}
const CodeBlock = (props : CodeBlockProps) => {
    return (
        <code className="mt-2 black_glow text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-200 rounded-lg p-4 pl-6">
            <span className="flex gap-4">
                <span className="shrink-0 text-blue-500">
                    $
                </span>
                <span className="flex-1">
                    {props.text}
                </span>
            </span>
        </code>
    )
}

export default CodeBlock
