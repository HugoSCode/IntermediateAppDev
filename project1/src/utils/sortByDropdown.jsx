import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const sortByDropdown=(isAscending, sortField, setSortField, setIsAscending, type)=>{
    const options=type==="stories" ?    
    <>
    <DropdownMenuRadioItem value="time">Created at</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="score">Score</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="type">Type</DropdownMenuRadioItem>
    </>
    :
    <>
    <DropdownMenuRadioItem value="karma">Karma</DropdownMenuRadioItem>
    <DropdownMenuRadioItem value="created">Created at</DropdownMenuRadioItem>
    </> 
        
    return(
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Sort By</Button>
      </DropdownMenuTrigger>
      <Button variant="outline" onClick={()=>setIsAscending(isAscending ? false : true)}>{isAscending ? "🔼" : "🔽" }</Button>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={sortField} onValueChange={setSortField}>
            {options}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    )
  }
