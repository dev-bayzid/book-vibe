import { useContext, useState } from "react";
import { BookContext } from "../../context/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedReadLists from "../../components/listedBooks/ListedReadLists";
import ListedWishLists from "../../components/listedBooks/ListedWishLists";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks, wishList);

  const [sortingType, setSortingType] =useState("");
    console.log(sortingType, "sortingType");
  return (
    <div className="container mx-auto my-6">
      <div className="flex justify-end items-center">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => {setSortingType('pages')}}>
              <a>Pages</a>
            </li>
            <li onClick={() => {setSortingType('rating')}}> 
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wish Books</Tab>
        </TabList>

        <TabPanel>
          <ListedReadLists sortingType={sortingType}></ListedReadLists>
        </TabPanel>
        <TabPanel>
          <ListedWishLists sortingType={sortingType}></ListedWishLists>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
