import { FC } from "react";

export const ExitPreviewBar:FC<{preview: boolean}> = ({preview}) => {
	if(!preview)
		return null;
	return (
		<a href="/api/exit-preview">Click here to exit preview</a>
	)
}
