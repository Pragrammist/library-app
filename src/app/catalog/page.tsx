"use client"
import { useSearchParams } from 'next/navigation'
import NavigationTextPoint from '../library/navigation/navigation-text-point/navigation-text-point'
import { PrimaryPaddings, SecondaryBackground } from '../library/containers/secondary-container/secondary-container'
import { CatalogType, getCatalogDataByPropName } from '../library/fake-data/fake-data'
import CardProjectHorizontalList from '../library/card-project/horizontal/card-project-horizontal-list/card-project-horizontal-list'
import { Box, Stack } from '@mui/material'
import { sizeVariables } from '../library/themes/main-theme'



export default function Page (){
    const searchParams = useSearchParams()

    const smileResponse = `¯\\_(ツ)_/¯`;

    const point = searchParams.get('point') ?? smileResponse;

    const search = searchParams.get('search') ?? "";

    const parseCatalogData = () : CatalogType => {
        const result = getCatalogDataByPropName(point);

        switch (result){
            case null:
                return {
                    title : smileResponse,
                    dataDetails: [],
                    shortData: [],
                    redirectTo: "/catalog"
                }
            default: 
                return result;
        }

    };

    const currentCatalogData = parseCatalogData();
    

    return <SecondaryBackground minHeight="60vh">
        <PrimaryPaddings sx={{
            paddingRight: 0,
            marginLeft: sizeVariables.marginLeftCatalog
        }}>
            <NavigationTextPoint textPoint={currentCatalogData.title} />
            <CardProjectHorizontalList search={search} projects={currentCatalogData.dataDetails} />
        </PrimaryPaddings>
    </SecondaryBackground>
}