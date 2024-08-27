import { image_name, unit_list } from "@/const/const";
import { Dialog, Flex, Image, useDisclosure } from "@yamada-ui/react";

import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || ".";

type memberImageProps = {
    imageName: string,
    index: number
}

export default function MemberImage(props: memberImageProps): JSX.Element {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { imageName, index: memberIndex } = props;
    return <>
        <button onClick={onOpen}>
            <Image
                src={`${BASE_PATH}/imgs/${imageName}`}
                alt="test"
            />
        </button>
        <Dialog isOpen={isOpen} onClose={onClose} onCancel={onClose} onSuccess={onClose}>
            {unit_list.filter(obj => obj.member.indexOf(memberIndex) >= 0).map((obj, index) => {
                return <UnitShowList index={memberIndex} unitName={obj["name"]} unitMember={obj["member"]} key={index} />
            })}
        </Dialog>
    </>
}

type UnitShowListProps = {
    index: number
    unitName: string,
    unitMember: Array<number>
}

function UnitShowList(props: UnitShowListProps): JSX.Element {
    const { index, unitName, unitMember } = props;

    const unitIndex: number = unitMember.indexOf(index)
    const temp: number = unitMember[unitIndex]
    unitMember[unitIndex] = unitMember[0]
    unitMember[0] = temp


    return <>
        <h1 className="unit-name">{unitName}</h1>
        <Flex gap={0}>{unitMember.map((memberIndex: number, index: number) => <Image
            w="15%"
            src={`${BASE_PATH}/imgs/${image_name[memberIndex]}`}
            alt="test"
            key={index}
        />)}</Flex>
    </>
}