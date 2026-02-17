type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn?: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isLoggedIn
        ? `Welcome Greet ${props.name}. You have ${props.messageCount} unread messages.`
        : "Welcome Guest"}
    </div>
  );
}

export default Greet;
