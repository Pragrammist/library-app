import { BoxProps, Collapse, Stack,  SvgIconProps, TextField, TextFieldProps} from "@mui/material";
import { MutableRefObject, useRef, useState } from "react";
import { InfoBackground } from "../../containers/secondary-container/secondary-container";
import { useTheme } from '@mui/material/styles';
import SearchIcon from "../../icons/SearchIcon";
import { catalogData, mainPage } from "../../fake-data/fake-data";
import { useRouter } from "next/navigation";

interface SearchInputProps {
    onSearchIconClick?: (isSearch: boolean) => void;
    label: string;
    isSearchDefault?: boolean;
    sizes?:{
      width: number,
      height: number
    }
    componentsProps?: {
      textField?: TextFieldProps;
      icon?: SvgIconProps;
      box?: BoxProps
    };
  }

  
/**
 * Компонент SearchInput представляет собой текстовое поле с иконкой поиска,
 * которое можно переключать между режимами поиска и ввода.
 * Возвращает компонент Box в котором находятся TextField с SvgIcon или только SvgIcon
 * 
 * @param {function} onSearchIconClick - Callback-функция, вызываемая при нажатии на иконку поиска. 
 *                                     Принимает один аргумент - текущее состояние режима поиска (true/false).
 * @param {string} label - Текст метки для текстового поля.
 * @param {object} [componentsProps] - Настройки для компонентов TextField и SavedSearchIcon.
 * @param {TextFieldProps} [componentsProps.textField] - Пропсы для компонента TextField.
 * @param {SvgIconProps} [componentsProps.icon] - Пропсы для компонента SavedSearchIcon.
 * @param {BoxProps} [componentsProps.box] - Пропсы для компонента Box.
 * 
 * @returns {JSX.Element} Компонент SearchInput.
 */
const SearchInput: React.FC<SearchInputProps> = ({ onSearchIconClick, label, componentsProps = {}, sizes, isSearchDefault}) => {
    
    const router = useRouter();
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
    
    function onEnter (event: React.KeyboardEvent<HTMLDivElement>) {

      if(event.key !== "Enter")
          return;

      const inputValue = inputRef?.current.value?.toLowerCase();
      
      const searchResult = Object.values(catalogData).find(data => {

        return data.dataDetails.some(p => {
          const lowTitle = p.title.toLowerCase();
          const lowDate = p.date.toLowerCase();
          const lowParagraph = p.paragraph.toLowerCase();

          return lowTitle.includes(inputValue) 
            || lowDate.includes(inputValue) 
            || lowParagraph.includes(inputValue);
        });          
      })
      const redirectValue = searchResult?.redirectTo ?? '/catalog';
      router.replace(`${redirectValue}&search=${inputValue}`)

    }
  
  
    const [isSearch, setSearch] = useState(isSearchDefault ?? false);
    const handleSearchIconClick = () => {
      setSearch(!isSearch);
      onSearchIconClick?.(isSearch)
    };
    const theme = useTheme();
    
    const height = sizes?.height ?? 5;

    const halfHeight = theme.spacing(height / 1.2);
    
    const height2 = theme.spacing(height * 1.2);
    
    const width = theme.spacing(sizes?.width ?? 40);
    
    const searchButton = (
      <SearchIcon
        {...componentsProps.icon} 
        sx={{ 
            fontSize: halfHeight,
            fill:theme.palette.info.contrastText,
            ...componentsProps.icon?.sx,
          }}
        onClick={handleSearchIconClick} 
      />
    );
    
    
    const defaultMuiTextField = theme.components?.MuiTextField?.defaultProps;
    const searchSection = <Collapse orientation="horizontal" in={isSearch}>
    
    <TextField
      {...defaultMuiTextField}
      inputRef={inputRef}
      onKeyDown={(e) => onEnter(e)}
      label={label}
      inputProps={{
        ...defaultMuiTextField?.inputProps,
        sx:{
            ...defaultMuiTextField?.inputProps?.sx,
            height: halfHeight,
            width: width,
          }
        }
      }
      style={{
        ...defaultMuiTextField?.style,
        marginRight: theme.spacing(2)
      }}
      
    />
  </Collapse> 
  
    return <InfoBackground sx={{
      padding: theme.spacing(1),
    }} 

    {...componentsProps.box}>
      <Stack direction="row" spacing={0} alignItems="center" minWidth={height2} justifyContent="center">
        {searchSection}
        {searchButton}
      </Stack>
    </InfoBackground>;
  };
  
  export default SearchInput;


