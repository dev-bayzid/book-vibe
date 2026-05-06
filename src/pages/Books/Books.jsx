import { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadLists from "../../components/listedBooks/ListedReadLists";
import ListedWishLists from "../../components/listedBooks/ListedWishLists";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks, wishList);

  return (
    <div className="container mx-auto my-6">
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadLists></ListedReadLists>
        </TabPanel>
        <TabPanel>
          <ListedWishLists></ListedWishLists>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
