import { Outlet } from "react-router-dom";

function RootLayout() {
  // const navigation = useNavigation();

  return (
    <>
      <main>
        {/* {navigation.state === "loading" && <p>loading events....</p>} */}
        <Outlet />
      </main>
    </>
  );
}
export default RootLayout;
