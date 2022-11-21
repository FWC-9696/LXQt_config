(()=>{"use strict";var e,t={5170:function(e,t,n){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function a(e){try{d(s.next(e))}catch(e){o(e)}}function r(e){try{d(s.throw(e))}catch(e){o(e)}}function d(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,r)}d((s=s.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const i=n(7542),o=n(3147),a=n(7683),r=n(7657),d=n(8887),l=n(6465),c=n(4980),u=n(7707),m=n(2432),p=n(8873),g=n(142),h=new o.default;class f{constructor(e){this.messageListener=e}sendMessage(e,t,n){this.messageListener?this.messageListener(t,null,n):chrome.tabs?chrome.tabs.sendMessage(e,t,n):chrome.runtime.sendMessage({message:"tabs",data:t},n)}query(e,t){this.messageListener||!chrome.tabs?t([{url:document.URL,id:-1}]):chrome.tabs.query(e,t)}}let y=window===window.top;window.addEventListener("message",(e=>s(void 0,void 0,void 0,(function*(){e.source===window.parent&&e.origin.endsWith(".youtube.com")&&(y=!0)})))),function(e){s(this,void 0,void 0,(function*(){const e=new f(undefined);(0,u.localizeHtmlPage)();let t,n=null,o=[],v=[],T=null;!function(e){e[e.Segments=0]="Segments",e[e.Chapters=1]="Chapters"}(t||(t={}));let C=t.Segments,S=null;const b=[],L={};["sponsorBlockPopupBody","sponsorblockPopup","sponsorStart","whitelistChannel","unwhitelistChannel","whitelistToggle","whitelistForceCheck","disableSkipping","enableSkipping","toggleSwitch","showNoticeAgain","optionsButton","helpButton","submitTimes","sponsorTimesContributionsContainer","sponsorTimesContributionsDisplay","sponsorTimesViewsContainer","sponsorTimesViewsDisplay","sponsorTimesViewsDisplayEndWord","sponsorTimesOthersTimeSavedDisplay","sponsorTimesOthersTimeSavedEndWord","sponsorTimesSkipsDoneContainer","sponsorTimesSkipsDoneDisplay","sponsorTimesSkipsDoneEndWord","sponsorTimeSavedDisplay","sponsorTimeSavedEndWord","setUsernameContainer","setUsernameButton","setUsernameStatus","setUsernameStatus","setUsername","usernameInput","usernameValue","submitUsername","sbPopupIconCopyUserID","submissionHint","mainControls","loadingIndicator","videoFound","sponsorMessageTimes","refreshSegmentsButton","whitelistButton","sbDonate","issueReporterTabs","issueReporterTabSegments","issueReporterTabChapters","sponsorTimesDonateContainer","sbConsiderDonateLink","sbCloseDonate","sbBetaServerWarning","sbCloseButton","issueReporterImportExport","importSegmentsButton","exportSegmentsButton","importSegmentsMenu","importSegmentsText","importSegmentsSubmit"].forEach((e=>L[e]=document.getElementById(e))),D(!1),yield h.wait((()=>null!==i.default.config&&y),5e3,5),L.sponsorBlockPopupBody.style.removeProperty("visibility"),i.default.configSyncListeners.includes(_)||i.default.configSyncListeners.push(_),L.sbCloseButton.addEventListener("click",(()=>{A({message:"closePopup"})})),window!==window.top&&(L.sbCloseButton.classList.remove("hidden"),L.sponsorBlockPopupBody.classList.add("is-embedded")),(0,r.showDonationLink)()||(L.sbDonate.style.display="none"),L.sbDonate.addEventListener("click",(()=>i.default.config.donateClicked=i.default.config.donateClicked+1)),i.default.config.testingServer&&(L.sbBetaServerWarning.classList.remove("hidden"),L.sbBetaServerWarning.addEventListener("click",(function(){I("advanced")}))),L.exportSegmentsButton.addEventListener("click",(function(){O((0,m.exportTimes)(v)),d.AnimationUtils.applyLoadingAnimation(L.exportSegmentsButton,.3)(),new p.default(null,"exportCopied",{title:chrome.i18n.getMessage("CopiedExclamation"),timed:!0,maxCountdownTime:()=>.6,referenceNode:L.exportSegmentsButton.parentElement,dontPauseCountdown:!0,style:{top:0,bottom:0,minWidth:0,right:"30px",margin:"auto",height:"max-content"},hideLogo:!0,hideRightInfo:!0})})),L.importSegmentsButton.addEventListener("click",(()=>L.importSegmentsMenu.classList.toggle("hidden"))),L.importSegmentsSubmit.addEventListener("click",(function(){return s(this,void 0,void 0,(function*(){A({message:"importSegments",data:L.importSegmentsText.value}),L.importSegmentsMenu.classList.add("hidden")}))})),L.sponsorStart.addEventListener("click",(function(){return s(this,void 0,void 0,(function*(){const e=yield R({from:"popup",message:"sponsorStart"});B(e);const t=e=>{const t=i.default.configSyncListeners.indexOf(e);-1!==t&&i.default.configSyncListeners.splice(t,1)},n=()=>{B(e),t(n)};i.default.configSyncListeners.push(n),setTimeout((()=>t(n)),200)}))})),L.whitelistToggle.addEventListener("change",(function(){this.checked?function(){s(this,void 0,void 0,(function*(){const e=yield R({message:"getChannelID"});if(!e.channelID)return void alert(chrome.i18n.getMessage("channelDataNotFound")+" https://github.com/ajayyy/SponsorBlock/issues/753");let t=i.default.config.whitelistedChannels;null==t&&(t=[]),t.push(e.channelID),L.whitelistChannel.style.display="none",L.unwhitelistChannel.style.display="unset",document.querySelectorAll(".SBWhitelistIcon")[0].classList.add("rotated"),i.default.config.forceChannelCheck||L.whitelistForceCheck.classList.remove("hidden"),i.default.config.whitelistedChannels=t,A({message:"whitelistChange",value:!0})}))}():function(){s(this,void 0,void 0,(function*(){const e=yield R({message:"getChannelID"});let t=i.default.config.whitelistedChannels;null==t&&(t=[]);const n=t.indexOf(e.channelID);t.splice(n,1),L.whitelistChannel.style.display="unset",L.unwhitelistChannel.style.display="none",document.querySelectorAll(".SBWhitelistIcon")[0].classList.remove("rotated"),L.whitelistForceCheck.classList.add("hidden"),i.default.config.whitelistedChannels=t,A({message:"whitelistChange",value:!1})}))}()})),L.whitelistForceCheck.addEventListener("click",(()=>{I("behavior")})),L.toggleSwitch.addEventListener("change",(function(){!function(e){i.default.config.disableSkipping=e;let t=L.disableSkipping,n=L.enableSkipping;e||(t=L.enableSkipping,n=L.disableSkipping),n.style.display="unset",t.style.display="none"}(!this.checked)})),L.submitTimes.addEventListener("click",(function(){o.length>0&&A({message:"submitTimes"})})),L.showNoticeAgain.addEventListener("click",(function(){i.default.config.dontShowNotice=!1,L.showNoticeAgain.style.display="none"})),L.setUsernameButton.addEventListener("click",V),L.usernameValue.addEventListener("click",V),L.submitUsername.addEventListener("click",(function(){L.setUsernameStatus.style.display="unset",L.setUsernameStatus.innerText=chrome.i18n.getMessage("Loading"),h.sendRequestToServer("POST","/api/setUsername?userID="+i.default.config.userID+"&username="+L.usernameInput.value,(function(e){200==e.status?(L.submitUsername.style.display="none",L.usernameInput.style.display="none",L.setUsernameContainer.style.removeProperty("display"),L.setUsername.classList.remove("SBExpanded"),L.usernameValue.innerText=L.usernameInput.value,L.setUsernameStatus.style.display="none",L.sponsorTimesContributionsContainer.classList.remove("hidden")):L.setUsernameStatus.innerText=l.GenericUtils.getErrorMessage(e.status,e.responseText)})),L.setUsernameContainer.style.display="none",L.setUsername.style.display="unset"})),L.optionsButton.addEventListener("click",(function(){chrome.runtime.sendMessage({message:"openConfig"})})),L.helpButton.addEventListener("click",(function(){chrome.runtime.sendMessage({message:"openHelp"})})),L.refreshSegmentsButton.addEventListener("click",(function(){N(),A({message:"refreshSegments"})})),L.sbPopupIconCopyUserID.addEventListener("click",(()=>s(this,void 0,void 0,(function*(){return O(yield h.getHash(i.default.config.userID))})))),window!==window.top&&document.addEventListener("keydown",(e=>{const t=e.target;"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName&&"ArrowUp"!==e.key&&"ArrowDown"!==e.key&&(" "===e.key&&e.preventDefault(),A({message:"keydown",key:e.key,keyCode:e.keyCode,code:e.code,which:e.which,shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey}))})),function e(){S=chrome.runtime.connect({name:"popup"}),S.onDisconnect.addListener((()=>e())),S.onMessage.addListener((e=>function(e){var t;switch(e.message){case"time":!function(e){const t={};for(const e of v)t[e.UUID]=e;const n=document.getElementById("issueReporterTimeButtons");for(const s of n.children){const n=s.getAttribute("data-uuid");if(null==n||null==t[n])continue;const i=s.querySelector("summary");if(null==i)continue;const o=t[n];i.classList.remove("segmentActive","segmentPassed"),e>=o.segment[0]&&(e<o.segment[1]?i.classList.add("segmentActive"):i.classList.add("segmentPassed"))}}(e.time);break;case"infoUpdated":x(e);break;case"videoChanged":T=e.videoID,o=null!==(t=i.default.config.unsubmittedSegments[T])&&void 0!==t?t:[],M(),e.whitelisted&&(L.whitelistChannel.style.display="none",L.unwhitelistChannel.style.display="unset",L.whitelistToggle.checked=!0,document.querySelectorAll(".SBWhitelistIcon")[0].classList.add("rotated")),N(),L.videoFound.innerHTML=chrome.i18n.getMessage("Loading"),U([],0)}}(e)))}();const w=i.default.config.disableSkipping;null!=w&&w&&(L.disableSkipping.style.display="none",L.enableSkipping.style.display="unset",L.toggleSwitch.checked=!1);const k=i.default.config.dontShowNotice;null!=k&&k&&(L.showNoticeAgain.style.display="unset");const E=["userName","viewCount","minutesSaved","vip","permissions"];function D(t){e.query({active:!0,currentWindow:!0},(n=>function(t,n){e.sendMessage(t[0].id,{message:"getVideoID"},(function(a){void 0!==a&&a.videoID?(T=a.videoID,function(t,n){var a;s(this,void 0,void 0,(function*(){T?(yield h.wait((()=>null!==i.default.config),5e3,10),o=null!==(a=i.default.config.unsubmittedSegments[T])&&void 0!==a?a:[],M(),e.sendMessage(t[0].id,{message:"isInfoFound",updating:n},x)):P()}))}(t,n)):void 0===a&&chrome.runtime.lastError&&P()}))}(n,t)))}function x(e){var t;return s(this,void 0,void 0,(function*(){null!=n&&(n(),n=null),chrome.runtime.lastError?P():(null!=e&&(L.mainControls.style.display="block",e.onMobileYouTube&&L.mainControls.classList.add("hidden"),L.whitelistButton.classList.remove("hidden"),L.loadingIndicator.style.display="none",v=null!==(t=e.sponsorTimes)&&void 0!==t?t:[],U(v,e.time),e.found?(L.videoFound.innerHTML=chrome.i18n.getMessage("sponsorFound"),L.issueReporterImportExport.classList.remove("hidden")):404==e.status||200==e.status?(L.videoFound.innerHTML=chrome.i18n.getMessage("sponsor404"),L.issueReporterImportExport.classList.remove("hidden")):(e.status?L.videoFound.innerHTML=chrome.i18n.getMessage("connectionError")+e.status:L.videoFound.innerHTML=chrome.i18n.getMessage("segmentsStillLoading"),L.issueReporterImportExport.classList.remove("hidden"))),(yield R({message:"isChannelWhitelisted"})).value&&(L.whitelistChannel.style.display="none",L.unwhitelistChannel.style.display="unset",L.whitelistToggle.checked=!0,document.querySelectorAll(".SBWhitelistIcon")[0].classList.add("rotated")))}))}function B(e){e.creatingSegment||(o=i.default.config.unsubmittedSegments[T]||[]),M()}function U(e,n){var s;let o=C;e.some((e=>e.actionType===a.ActionType.Chapter&&e.source!==a.SponsorSourceType.YouTube))?o===t.Segments&&e.every((e=>e.actionType===a.ActionType.Chapter))?(L.issueReporterTabs.classList.add("hidden"),o=t.Chapters):L.issueReporterTabs.classList.remove("hidden"):(L.issueReporterTabs.classList.add("hidden"),o=t.Segments);const r=e.filter((e=>o===t.Segments?e.actionType!==a.ActionType.Chapter:o!==t.Chapters||e.actionType===a.ActionType.Chapter&&e.source!==a.SponsorSourceType.YouTube)).sort(((e,t)=>e.segment[1]-t.segment[1])).sort(((e,t)=>e.segment[0]-t.segment[0])),u=document.getElementById("issueReporterTimeButtons");for(;u.firstChild;)u.removeChild(u.firstChild);r.length>0?L.exportSegmentsButton.classList.remove("hidden"):L.exportSegmentsButton.classList.add("hidden");const m=i.default.config.isVip;for(let e=0;e<r.length;e++){const t=r[e].UUID,o=r[e].locked,p=r[e].category,g=r[e].actionType,h=document.createElement("summary");h.classList.add("segmentSummary"),n>=r[e].segment[0]&&(n<r[e].segment[1]?h.classList.add("segmentActive"):h.classList.add("segmentPassed"));const f=document.createElement("span");f.id="sponsorTimesCategoryColorCircle"+t,f.style.backgroundColor=null===(s=i.default.config.barTypes[p])||void 0===s?void 0:s.color,f.classList.add("dot"),f.classList.add("sponsorTimesCategoryColorCircle");let y="";r[e].hidden===a.SponsorHideType.Downvoted?y=" ("+chrome.i18n.getMessage("hiddenDueToDownvote")+")":r[e].hidden===a.SponsorHideType.MinimumDuration?y=" ("+chrome.i18n.getMessage("hiddenDueToDuration")+")":r[e].hidden===a.SponsorHideType.Hidden&&(y=" ("+chrome.i18n.getMessage("manuallyHidden")+")");const v=r[e].description||(0,c.shortCategoryName)(p),T=document.createTextNode(v+y),C=document.createElement("div");r[e].actionType===a.ActionType.Full?C.innerText=chrome.i18n.getMessage("full"):C.innerText=l.GenericUtils.getFormattedTime(r[e].segment[0],!0)+(g!==a.ActionType.Poi?" "+chrome.i18n.getMessage("to")+" "+l.GenericUtils.getFormattedTime(r[e].segment[1],!0):""),C.style.margin="5px";const S=document.createElement("div");g!==a.ActionType.Chapter&&S.appendChild(f);const L=document.createElement("span");L.className="summaryLabel",L.appendChild(T),S.appendChild(L),h.appendChild(S),h.appendChild(C);const w=document.createElement("details");w.classList.add("votingButtons"),w.id="votingButtons"+t,w.setAttribute("data-uuid",t),w.addEventListener("toggle",(()=>{w.open?b.push(t):-1!==b.indexOf(t)&&b.splice(b.indexOf(t),1)})),w.open=b.some((e=>e===t));const k=document.createElement("div");k.id="sponsorTimesVoteButtonsContainer"+t,k.classList.add("sbVoteButtonsContainer");const E=document.createElement("img");E.id="sponsorTimesUpvoteButtonsContainer"+t,E.className="voteButton",E.title=chrome.i18n.getMessage("upvote"),E.src=chrome.runtime.getURL("icons/thumbs_up.svg"),E.addEventListener("click",(()=>F(1,t)));const D=document.createElement("img");D.id="sponsorTimesDownvoteButtonsContainer"+t,D.className="voteButton",D.title=chrome.i18n.getMessage("downvote"),D.src=o&&m?chrome.runtime.getURL("icons/thumbs_down_locked.svg"):chrome.runtime.getURL("icons/thumbs_down.svg"),D.addEventListener("click",(()=>F(0,t)));const x=document.createElement("img");x.id="sponsorTimesCopyUUIDButtonContainer"+t,x.className="voteButton",x.src=chrome.runtime.getURL("icons/clipboard.svg"),x.title=chrome.i18n.getMessage("copySegmentID"),x.addEventListener("click",(()=>{O(t),d.AnimationUtils.applyLoadingAnimation(x,.3)()}));const B=document.createElement("img");B.id="sponsorTimesCopyUUIDButtonContainer"+t,B.className="voteButton",B.title=chrome.i18n.getMessage("hideSegment"),r[e].hidden===a.SponsorHideType.Hidden?B.src=chrome.runtime.getURL("icons/not_visible.svg"):B.src=chrome.runtime.getURL("icons/visible.svg"),B.addEventListener("click",(()=>{d.AnimationUtils.applyLoadingAnimation(B,.4)(),r[e].hidden===a.SponsorHideType.Hidden?(B.src=chrome.runtime.getURL("icons/visible.svg"),r[e].hidden=a.SponsorHideType.Visible):(B.src=chrome.runtime.getURL("icons/not_visible.svg"),r[e].hidden=a.SponsorHideType.Hidden),A({message:"hideSegment",type:r[e].hidden,UUID:t})}));const U=document.createElement("img");U.id="sponsorTimesSkipButtonContainer"+t,U.className="voteButton",U.src=chrome.runtime.getURL("icons/skip.svg"),U.title=g===a.ActionType.Chapter?chrome.i18n.getMessage("playChapter"):chrome.i18n.getMessage("skipSegment"),U.addEventListener("click",(()=>W(g,t,U))),w.addEventListener("dblclick",(()=>W(g,t))),k.appendChild(E),k.appendChild(D),k.appendChild(x),(r[e].actionType===a.ActionType.Skip||r[e].actionType===a.ActionType.Mute||r[e].actionType===a.ActionType.Poi&&[a.SponsorHideType.Visible,a.SponsorHideType.Hidden].includes(r[e].hidden))&&k.appendChild(B),r[e].actionType!==a.ActionType.Full&&k.appendChild(U);const M=document.createElement("div");M.id="sponsorTimesVoteStatusContainer"+t,M.classList.add("sponsorTimesVoteStatusContainer"),M.style.display="none";const I=document.createElement("div");I.id="sponsorTimesThanksForVotingText"+t,I.classList.add("sponsorTimesThanksForVotingText"),M.appendChild(I),w.append(h),w.append(k),w.append(M),u.appendChild(w)}}function M(){L.sponsorStart.innerText=chrome.i18n.getMessage(function(){var e;const t=i.default.config.unsubmittedSegments[T];if(!t)return!1;const n=t[t.length-1];return n&&2!==(null===(e=null==n?void 0:n.segment)||void 0===e?void 0:e.length)}()?"sponsorEnd":"sponsorStart"),L.submitTimes.style.display=o&&o.length>0?"unset":"none",L.submissionHint.style.display=o&&o.length>0?"unset":"none"}function I(e){chrome.runtime.sendMessage({message:"openConfig",hash:e})}function A(t,n){e.query({active:!0,currentWindow:!0},(s=>{e.sendMessage(s[0].id,t,n)}))}function R(e){return new Promise((t=>A(e,(e=>t(e)))))}function V(){L.usernameInput.value=L.usernameValue.innerText,L.submitUsername.style.display="unset",L.usernameInput.style.display="unset",L.setUsernameContainer.style.display="none",L.setUsername.style.display="flex",L.setUsername.classList.add("SBExpanded"),L.setUsernameStatus.style.display="none",L.sponsorTimesContributionsContainer.classList.add("hidden")}function P(){document.getElementById("loadingIndicator").innerText=chrome.i18n.getMessage("noVideoID"),L.issueReporterTabs.classList.add("hidden")}function H(e,t){document.getElementById("sponsorTimesVoteButtonsContainer"+t).style.display="none",document.getElementById("sponsorTimesVoteStatusContainer"+t).style.removeProperty("display"),document.getElementById("sponsorTimesThanksForVotingText"+t).innerText=e}function F(e,t){return s(this,void 0,void 0,(function*(){H(chrome.i18n.getMessage("Loading"),t);const n=yield R({message:"submitVote",type:e,UUID:t});null!=n&&(1==n.successType||-1==n.successType&&429==n.statusCode?H(chrome.i18n.getMessage("voted"),t):-1==n.successType&&H(l.GenericUtils.getErrorMessage(n.statusCode,n.responseText),t),setTimeout((()=>function(e){document.getElementById("sponsorTimesVoteButtonsContainer"+e).style.display="block",document.getElementById("sponsorTimesVoteStatusContainer"+e).style.display="none",document.getElementById("sponsorTimesThanksForVotingText"+e).removeAttribute("innerText")}(t)),1500))}))}function N(){n=d.AnimationUtils.applyLoadingAnimation(L.refreshSegmentsButton,.3)}function W(e,t,n){e===a.ActionType.Chapter?A({message:"unskip",UUID:t}):A({message:"reskip",UUID:t}),n&&d.AnimationUtils.applyLoadingAnimation(n,.3)()}function O(e){window===window.top?window.navigator.clipboard.writeText(e):A({message:"copyToClipboard",text:e})}function q(e){e=Math.round(10*e)/10;const t=Math.floor(e/1440),n=Math.floor(e/60)%24;return(t>0?t+chrome.i18n.getMessage("dayAbbreviation")+" ":"")+(n>0?n+chrome.i18n.getMessage("hourAbbreviation")+" ":"")+(e%60).toFixed(1)}function _(e){var t;for(const n in e)"unsubmittedSegments"===n&&(o=null!==(t=i.default.config.unsubmittedSegments[T])&&void 0!==t?t:[],M())}i.default.config.payments.freeAccess||(0,g.noRefreshFetchingChaptersAllowed)()||E.push("freeChaptersAccess"),h.asyncRequestToServer("GET","/api/userInfo",{publicUserID:yield h.getHash(i.default.config.userID),values:E}).then((e=>{if(200===e.status){const t=JSON.parse(e.responseText);L.usernameValue.innerText=t.userName;const n=t.viewCount;0!=n&&(L.sponsorTimesViewsDisplayEndWord.innerText=n>1?chrome.i18n.getMessage("Segments"):chrome.i18n.getMessage("Segment"),L.sponsorTimesViewsDisplay.innerText=n.toLocaleString(),L.sponsorTimesViewsContainer.style.display="block"),function(e){i.default.config.showDonationLink&&i.default.config.donateClicked<=0&&i.default.config.showPopupDonationCount<5&&e<5e4&&!i.default.config.isVip&&i.default.config.skipCount>10&&(L.sponsorTimesDonateContainer.style.display="flex",L.sbConsiderDonateLink.addEventListener("click",(()=>{i.default.config.donateClicked=i.default.config.donateClicked+1})),L.sbCloseDonate.addEventListener("click",(()=>{L.sponsorTimesDonateContainer.style.display="none",i.default.config.showPopupDonationCount=100})),i.default.config.showPopupDonationCount=i.default.config.showPopupDonationCount+1)}(n);const s=t.minutesSaved;0!=s&&(L.sponsorTimesOthersTimeSavedEndWord.innerText=1!=s?chrome.i18n.getMessage("minsLower"):chrome.i18n.getMessage("minLower"),L.sponsorTimesOthersTimeSavedDisplay.innerText=q(s)),i.default.config.isVip=t.vip,i.default.config.permissions=t.permissions,t.freeChaptersAccess&&(i.default.config.payments.chaptersAllowed=t.freeChaptersAccess,i.default.config.payments.freeAccess=t.freeChaptersAccess,i.default.config.payments.lastCheck=Date.now(),i.default.forceSyncUpdate("payments"))}})),null!=i.default.config.sponsorTimesContributed&&(L.sponsorTimesContributionsDisplay.innerText=i.default.config.sponsorTimesContributed.toLocaleString(),L.sponsorTimesContributionsContainer.classList.remove("hidden")),null!=i.default.config.skipCount&&(1!=i.default.config.skipCount?L.sponsorTimesSkipsDoneEndWord.innerText=chrome.i18n.getMessage("Segments"):L.sponsorTimesSkipsDoneEndWord.innerText=chrome.i18n.getMessage("Segment"),L.sponsorTimesSkipsDoneDisplay.innerText=i.default.config.skipCount.toLocaleString(),L.sponsorTimesSkipsDoneContainer.style.display="block"),null!=i.default.config.minutesSaved&&(1!=i.default.config.minutesSaved?L.sponsorTimeSavedEndWord.innerText=chrome.i18n.getMessage("minsLower"):L.sponsorTimeSavedEndWord.innerText=chrome.i18n.getMessage("minLower"),L.sponsorTimeSavedDisplay.innerText=q(i.default.config.minutesSaved)),setTimeout((()=>L.sponsorblockPopup.classList.remove("preload")),250),L.issueReporterTabSegments.addEventListener("click",(()=>{L.issueReporterTabSegments.classList.add("sbSelected"),L.issueReporterTabChapters.classList.remove("sbSelected"),C=t.Segments,D(!0)})),L.issueReporterTabChapters.addEventListener("click",(()=>{L.issueReporterTabSegments.classList.remove("sbSelected"),L.issueReporterTabChapters.classList.add("sbSelected"),C=t.Chapters,D(!0)}))}))}()}},n={};function s(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,s),o.exports}s.m=t,e=[],s.O=(t,n,i,o)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,i,o]=e[c],r=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(s.O).every((e=>s.O[e](n[d])))?n.splice(d--,1):(r=!1,o<a&&(a=o));if(r){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,i,o]},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={42:0};s.O.j=t=>0===e[t];var t=(t,n)=>{var i,o,[a,r,d]=n,l=0;if(a.some((t=>0!==e[t]))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(d)var c=d(s)}for(t&&t(n);l<a.length;l++)o=a[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},n=self.webpackChunksponsorblock=self.webpackChunksponsorblock||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=s.O(void 0,[736],(()=>s(5170)));i=s.O(i)})();