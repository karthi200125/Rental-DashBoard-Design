'use client'

import { Tooltip } from "react-tooltip"


const ToolTipWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
            <Tooltip
                id="my-tooltip"
                className="z-[9999]"
                style={{ backgroundColor: "black", color: "white", fontSize: "12px" }}
            />
        </div>
    )
}

export default ToolTipWrapper