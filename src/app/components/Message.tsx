interface StatusMessageProps {
  type: "loading" | "error" | "empty";
}

const Message = ({ type }: StatusMessageProps) => {
  const messages = {
    loading: {
      title: "Loading countries...",
      sub: "Fetching data from the API",
    },
    error: {
      title: "Something went wrong",
      sub: "Could not fetch countries. Please try again.",
    },
    empty: {
      title: "No countries found",
      sub: "Try searching for a different country",
    },
  }

  const {  title, sub } = messages[type]

  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{sub}</p>
    </div>
  )
}

export default Message