import AccountBody from "./AccountBody";
import LoggedInHeader from "./LoggedInHeader";

const Account = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <LoggedInHeader />
      <AccountBody />
    </div>
  );
};

export default Account;
