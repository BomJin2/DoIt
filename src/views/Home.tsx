import { Header, Nav, PaginationFooter } from "@/components/common";
import { ImageCard } from "@/components/common/home";
import { SearchBar } from "@/components/ui/search-bar";
import { useToast } from "@/hooks/use-toast";
import { fetchApi, pageAtom, searchValueAtom } from "@/stores";
import { ImageDataType } from "@/types";
import { useAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";

const HomePage = () => {
  const [searchValue, setSearchValue] = useAtom(searchValueAtom);
  const [page, setPage] = useAtom(pageAtom);
  const [inputValue, setInputValue] = useState<string>("");
  const [img, setImg] = useState([]);
  const { toast } = useToast();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // 입력 필드 초기화
      setInputValue("");
      setSearchValue(inputValue);
    }
  };

  const fetchImages = useCallback(async () => {
    try {
      const res = await fetchApi(searchValue, page);

      if (res.status === 200 && res.data) {
        setImg(res.data.results);
        toast({
          title: "API 호출 성공! ",
          description: "Shadcn UI = Toast test",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Unsplash API 호출 실패",
          description: "API 호출을 위한 필수 파라미터 값을 체크해보세요",
        });
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }, [searchValue, page, toast]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />
          <Nav />
          <div className="page__container__wallpaper">
            <img src="src/assets/images/wallpaper.png" alt="" className="bg-image" />
            <div className="search-box">
              <h1 className="scroll-m-20 text-4xl text-white font-extrabold tracking-tight ">
                프로젝트 02: 오픈 API를 활용한 이미지 검색 사이트 만들기
              </h1>
              <div className="flex flex-col w-full mt-5 mb-2">
                <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">인터넷 시각자료 출처입니다.</h4>
                <h4 className="scroll-m-20 text-md text-white font-semibold tracking-tight">모든 지역에 있는 크리에이터들의 지원을 받습니다</h4>
              </div>
              <SearchBar
                placeholder="원하는 이미지를 검색하세요."
                onInput={handleChange}
                value={inputValue}
                onKeyDown={handleKeyDown} // 엔터 키 이벤트 핸들러
              />
            </div>
          </div>
          <div className="page__container__contents">
            {img.map((item: ImageDataType) => {
              return <ImageCard data={item} />;
            })}
          </div>
          <PaginationFooter />
        </div>
      </div>
    </>
  );
};
export default HomePage;
