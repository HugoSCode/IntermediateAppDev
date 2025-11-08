import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import Stories from "./Stories/Stories";
import Favourites from "./Favourites/Favourites";
import Leaders from "./Leaders/Leaders";
import { useState, useEffect } from "react";
import { cacheLeaders } from "./Leaders/CacheLeader";


const App = () => {
  const [dark, setDark] = useState(false);
   const toggleTheme = () => setDark(prev=>!prev);

  return (
      <div className={dark? "dark": ""}>
        <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center dark:bg-gray-800">
          <Tabs defaultValue="stories" className="w-9/10">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="stories" className="hover:cursor-pointer">Stories</TabsTrigger>
              <TabsTrigger value="leaders" className="hover:cursor-pointer">Leaders</TabsTrigger>
              <TabsTrigger value="favourites" className="hover:cursor-pointer">Favourites</TabsTrigger>
              <button onClick={toggleTheme} className="w-20 border-2 border-gray-400 rounded text-black font-bold hover:cursor-pointer dark:text-white">{dark ? "🌞Light": "🌙Dark"}</button>
            </TabsList>
            <TabsContent value="stories">
              <div className="p-4 border rounded-lg dark:text-white dark:bg-gray-800">
                <Stories />
              </div>
            </TabsContent>
            <TabsContent value="leaders">
              <div className="p-4 border rounded-lg">
                <Leaders dark={dark}/>
              </div>
            </TabsContent>
            <TabsContent value="favourites">
              <div className="p-4 border rounded-lg dark:text-white">
                <Favourites />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
  );
};

export default App;
