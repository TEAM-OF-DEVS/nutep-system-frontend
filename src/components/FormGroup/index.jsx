import React from "react";

export const FormGroup = ({ title="", description="", children }) => {
    return (
        <div>
            <div className="bg-green-200 mt-4">
                <span className=" text-green-800 pl-8 font-bold">
                    {title}
                </span>
            </div>
            {description?.trim() && (
                <div className="flex mt-3">
                    <span className="pl-8 font-bold text-sm">
                        {description}
                    </span>
                </div>
            )}
            {children}
        </div>

    );
};



