import Header from "../../components/Header";
import UsersList from "./UsersList";
import Footer from "../../components/Footer";

export default function UsersPage() {
  return (
    <>
      <Header />
      <main>
        <UsersList />
      </main>
      <Footer />
    </>
  );
}
