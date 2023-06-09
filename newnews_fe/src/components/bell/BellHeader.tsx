import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

import Modal from "@/components/bell/Modal";
import useBellList from "@/hooks/bell/useBellList";
import useBellDeleteAll from "@/hooks/bell/useBellDeleteAll";
import { LoginState } from "@/states/LoginState";

import styles from "@/styles/bell/BellHeader.module.scss";



/**
 * 
 * @returns 알림창 맨 상단 바
 */
export function BellHeader(){
    const navigate = useNavigate()
    const isLogin = useRecoilValue(LoginState)
    const userId = isLogin[0].id
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const bellDeleteAll = useBellDeleteAll(userId)
    /**
     * 알림 전체 삭제
     */
    const onClcikDeleteBellAll = () =>{
        bellDeleteAll.mutate( {userId: userId})
        navigate('/bell/none')
    }
    /**
     * 모달창을 열고 닫고
     */
    const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    /**
     * 페이지 뒤로가기
     */
    function goBack() {
        navigate(-1)
    }

    return (
    <div className={styles.container} >
        <div className={styles.bellBar}>
            <IoIosArrowBack className={styles.goBack} onClick={ goBack }/>
            <div className={styles.alert}>
                <h2>알림센터</h2>
            </div>
            {isOpenModal && ( 
            <Modal onClickChoice={ onClcikDeleteBellAll } onClickToggleModal={ onClickToggleModal } children={"알림을 전체 삭제 하시겠습니까?"} />
            )}
            <RiDeleteBin6Line className={styles.deleteAlret} onClick={ onClickToggleModal }/>
        </div>
    </div>
    )
}