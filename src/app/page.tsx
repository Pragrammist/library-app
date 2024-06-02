"use client"
import { Stack, Typography } from "@mui/material";
import ImageRightText from "./library/image-right-text/image-right-text";
import { sizeVariables } from "./library/themes/main-theme";
import CardProjectVerticalList from "./library/card-project/vertical/card-project-vertical-list/card-project-vertical-list";
import { mainPage, mainPageData, mainPageLinks } from "./library/fake-data/fake-data";
import TextList from "./library/text-list/text-list";
import LinksList from "./library/text-list/links-list";
import SearchInput from "./library/search/search-input/search-input";
import { 
  FourthPadding, 
  InfoBackground, 
  LargeBottomMargin, 
  PrimaryPaddings, 
  SecondaryBackground, 
  SecondaryPaddings, 
  ThirdyBottomMargin 
} from "./library/containers/secondary-container/secondary-container";
import React from "react";


export default function Home() {

  function CenterContentHelper(props: {content: React.ReactNode}){
    return <LargeBottomMargin>
      <PrimaryPaddings>
        <Stack alignItems="center">
            <Stack width={sizeVariables.maxWidthHeaderContent}>
              {props.content}
            </Stack>
        </Stack>
      </PrimaryPaddings>
    </LargeBottomMargin>
  }

  return (
    <SecondaryBackground>
      <ImageRightText 
        upperText="“...городская библиотека, как книгохранилище, 
        должна занимать свое собственное, просторное, 
        привлекательное для публики помещение...” А.П. Чехов" 
        lowwerText="“В человеке всё должно быть прекрасно: и лицо, 
        и одежда, и душа, и мысли” А.П. Чехов"
        imgUrl="main0.jpg"
      />
      <PrimaryPaddings>
          {mainPage.map(data => <CardProjectVerticalList 
            title={data.title}
            buttonText={data.buttonText}
            projects={data.projects}
            redirectTo={data.redirectTo}
          />)}
      </PrimaryPaddings>
      <LargeBottomMargin>
        <InfoBackground id="shedule">
          <FourthPadding>
            <Stack alignItems="center">
              <Stack 
                direction={{
                  sm: "column",
                  md: "row"
                }}
                justifyContent="center"
                maxWidth={sizeVariables.maxWidthHeaderContent}
                spacing={21}
              >
                {mainPageData.map(data => <TextList title={data.title} textArray={data.textArray} />)}
              </Stack>
            </Stack>
          </FourthPadding>
        </InfoBackground>
      </LargeBottomMargin>
      <CenterContentHelper 
        content={<LinksList title={mainPageLinks.title} textArray={mainPageLinks.textArray} />}
      />          
      <ThirdyBottomMargin id="scores">
        <CardProjectVerticalList
          buttonText="Оставить отзыв"
          projects={[]}
          title="ВАШЕ МНЕНИЕ ВАЖНО ДЛЯ НАС"
          redirectTo="/score"
        />
      </ThirdyBottomMargin>
      <CenterContentHelper 
        content={
          <SecondaryPaddings>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Typography variant="h2" textTransform="uppercase">Поиск по сайту</Typography>
              <SearchInput sizes={{ width: 82, height: 7 }} isSearchDefault={true} label="что ищите?" />
            </Stack>
          </SecondaryPaddings>
        }
      />
      <Stack></Stack>
    </SecondaryBackground>
  ); 
}