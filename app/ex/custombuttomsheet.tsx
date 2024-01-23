import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { Text } from "react-native"

interface Props {
    bottomSheetRef: any
    snapPoints: any
    handleSheetChanges: any
    children?: any

}
export default function CustomBottomSheet({ bottomSheetRef, snapPoints, handleSheetChanges, children }: Props) {
    return (

        <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
        >
            {children}
        </BottomSheetModal>
    )
}