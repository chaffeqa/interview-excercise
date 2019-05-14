import React from "react";
import styled from "styled-components";
import { FacebookIcon } from "../../../components/icons/FacebookIcon";
import { TwitterIcon } from "../../../components/icons/TwitterIcon";
import Modal, { ModalWrapper } from "../../../components/modal";
import { GAME_UIDS } from "../../../constants/games";
import { IProp } from "../../../constants/interfaces/primetime-picks";
import { QUESTION_TYPE } from "../../../constants/primetimepicks";
import Omniture from "../../../utils/omniture";

const socialReferrerLink = (href) => encodeURIComponent(href);
const gameUid = GAME_UIDS.NBA_PRIMETIME_PICKS;
const iidPrefix = gameUid;


export default class ShareQuestionModal extends React.Component {
  public render() {
    const { isOpen, toggleModal, prop, pick } = this.props;

    const question = prop.question_text;
    const needsGrammarPrepend = prop.question_type === QUESTION_TYPE.TEAM_VS_TEAM;
    const urlQuestion = question.replace(/\s+/g, "-");
    const formattedPick = pick.replace(/\s+/g, "-");
    const urlPick = needsGrammarPrepend ? `the-${formattedPick}` : formattedPick;
    const urlRoot = typeof(window) !== "undefined" && socialReferrerLink(`${window.location.href}/question-share?question=${urlQuestion}&pick=${urlPick}&iid=${iidPrefix}-share-`) || "";

    const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlRoot}facebook`;
    const twShareUrl = `https://twitter.com/share?url=${urlRoot}twitter`;

    return (
      <Modal isDialog={true} isOpen={isOpen} afterClose={() => toggleModal()} analyticsPageName="share-pick">
        <ModalWrapper gameUid={gameUid}>
          <div>
          <h4>{"Share This Question on Social Media!"}</h4>
          <div className="share-type">
            <div className="share">
              <a target="_blank" onClick={() => Omniture.trackInteraction(`social_share:facebook`, "event18")} href={fbShareUrl}>
                <div className="icon"><FacebookIcon /></div>
                <div className="copy">Share via Facebook</div>
              </a>
            </div>
            <div className="share">
              <a target="_blank" onClick={() => Omniture.trackInteraction(`social_share:twitter`, "event18")} href={twShareUrl}>
                <div className="icon"><TwitterIcon /></div>
                <div className="copy">Share via Twitter</div>
              </a>
            </div>
          </div>
          </div>
        </ModalWrapper>
      </Modal>
    );
  }
}
