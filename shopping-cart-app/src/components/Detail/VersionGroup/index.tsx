import React, { FC, ReactElement } from 'react'
import { IPhoneVersion } from '../../../typings'

interface IProps {
    versionId: number;
    versions: IPhoneVersion[];
    setVersionId: (id: number) => void;
}

const VersionGroup: FC<IProps> = ({
    versionId,
    versions,
    setVersionId
}): ReactElement => {
    return (
        <div className="btn-group">
            <h2>版本选择：</h2>
            {
                versions && versions.map((version: IPhoneVersion) => {
                    return (
                       <button
                        className={
                            ['radio-btn', version.vid === versionId ? ' current' : ''].join('')
                        }
                        key={ version.mark }
                        onClick={ () => setVersionId(version.vid) }
                       >
                        { version.title }
                       </button>
                    )
                })
            }
        </div>
    )
}

export default VersionGroup