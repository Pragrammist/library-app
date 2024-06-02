import { SvgIcon, SvgIconProps } from "@mui/material"
import React from "react"

const SearchIcon : React.FC<SvgIconProps> = (props : SvgIconProps) => {
    return <SvgIcon
    {...props}
    >
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.0722 34.7728L48.0658 44.7642L44.7642 48.0658L34.7728 38.0722C31.0552 41.0524 26.4312 42.6733 21.6665 42.6665C10.0745 42.6665 0.666504 33.2585 0.666504 21.6665C0.666504 10.0745 10.0745 0.666504 21.6665 0.666504C33.2585 0.666504 42.6665 10.0745 42.6665 21.6665C42.6733 26.4312 41.0524 31.0552 38.0722 34.7728ZM33.3915 33.0415C36.3528 29.9962 38.0065 25.9142 37.9998 21.6665C37.9998 12.6435 30.6895 5.33317 21.6665 5.33317C12.6435 5.33317 5.33317 12.6435 5.33317 21.6665C5.33317 30.6895 12.6435 37.9998 21.6665 37.9998C25.9142 38.0065 29.9962 36.3528 33.0415 33.3915L33.3915 33.0415ZM24.4152 12.7438C23.7271 13.0546 23.1248 13.5277 22.6598 14.1225C22.1948 14.7173 21.881 15.416 21.7455 16.1587C21.6099 16.9014 21.6565 17.6659 21.8814 18.3866C22.1062 19.1073 22.5026 19.7627 23.0364 20.2966C23.5703 20.8304 24.2257 21.2268 24.9464 21.4516C25.6671 21.6765 26.4316 21.7231 27.1743 21.5875C27.917 21.452 28.6157 21.1382 29.2105 20.6732C29.8053 20.2082 30.2784 19.6059 30.5892 18.9178C31.2024 20.9096 31.1313 23.0493 30.3873 24.9961C29.6433 26.9428 28.2691 28.5845 26.4838 29.6596C24.6985 30.7347 22.6047 31.1813 20.5361 30.9283C18.4674 30.6754 16.543 29.7373 15.0693 28.2637C13.5957 26.79 12.6576 24.8656 12.4047 22.797C12.1517 20.7283 12.5983 18.6345 13.6734 16.8492C14.7485 15.0639 16.3902 13.6897 18.337 12.9457C20.2837 12.2017 22.4234 12.1306 24.4152 12.7438Z"/>
        </svg>
    </SvgIcon>
}

export default SearchIcon;