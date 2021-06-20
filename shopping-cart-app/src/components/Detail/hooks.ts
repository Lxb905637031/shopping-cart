import { useEffect, useState } from 'react'
import { IPhoneColor, IPhoneVersion } from '../../typings'

export function useColor(colorGroup: IPhoneColor[], colorId: number): IPhoneColor {
    const [ currentColor, setCurrentColor] = useState<IPhoneColor>(colorGroup[0])

    useEffect(() => {
        const _currentColor = colorGroup.find((color) => color.cid === colorId)
        _currentColor && setCurrentColor(_currentColor)
    }, [colorGroup, colorId])

    return currentColor
}

export function useVersion(versionGroup: IPhoneVersion[], versionId: number): IPhoneVersion {
    const [currentVersion, setCurrentVersion] = useState<IPhoneVersion>(versionGroup[0])
    useEffect(() => {
        const _currentVersion = versionGroup.find((version) => version.vid === versionId)
        _currentVersion && setCurrentVersion(_currentVersion)
    }, [versionGroup, versionId])
    return currentVersion
}