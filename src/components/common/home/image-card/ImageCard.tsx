import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Skeleton,
} from "@/components/ui";
import { FolderOpen, Heart } from "lucide-react";

const ImageCard = () => {
  return (
    <>
      <div className="flex flex-col justify-between space-y-3 w-64 h-64 cursor-pointer">
        <div className="relative flex flex-col gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"} className="absolute top-2 right-4 bg-neutral-500 bg-opacity-50 hover:bg-opacity-50 z-10">
                <FolderOpen className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          {/* Skeleton UI: 이미지 데이터가 렌더링 되기 전 */}
          <Skeleton className="w-[250px] h-[150px] rounded-xl z-0" />
          <small className="w-full gap-1 text-sm font-medium line-clamp-2">
            조회한 이미지에 대한 설명란입니다.조회한 이미지에 대한 설명란입니다.조회한 이미지에 대한 설명란입니다.조회한 이미지에 대한 설명란입니다.
          </small>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full">
            {/* 게시일 */}
            <div className="flex items-center gap-1 text-sm">
              <span className="leading-7">게시일:</span>
              <span className="leading-7">2024-11-15</span>
            </div>
            {/* 좋아요 수 */}
            <div className="flex items-center gap-1 text-sm">
              <Heart className="h-[14px] w-[14px] mt-[2px] text-rose-600" fill="#e11d48" />
              1,000
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ImageCard };
