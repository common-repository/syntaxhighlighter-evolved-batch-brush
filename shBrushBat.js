/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * This brush was originally created by Ildar Shaimordanov
 * homepage:   http://with-love-from-siberia.blogspot.com/
 * brush page: http://with-love-from-siberia.blogspot.com/2009/07/finest-code-syntax-highlighter.html
 */

SyntaxHighlighter.brushes.Cmd = function()
{
    var geshiKeywords1 = 'While To Then Switch Select Return Next IntControl Include In If ' +
        'Goto GoSub ForEach For Exit Execute ErrorMode EndWhile EndSwitch #EndSubRoutine ' + 
        'EndSelect EndIf #EEndFunction EndFor End Else DropWild Drop #DefineSubRoutine ' + 
        '#DefineFunction Debug Continue Case CallExt Call By BreakPoint Break';

    var geshiKeywords2 = 'ZOOMED YES WORD4 WORD2 WORD1 WHOLESECTION WAIT UNSORTED UNCHECK TRUE TILE ' +
        'TAB STRING STACK SPC2NET SORTED SOK SNET2PC SINGLE SHIFT SERVER SERRWINSOCK ' + 
        'SERRVOICE SERRSOCKET SERRSERVICE SERRSELECT SERRPARAM SERROUTOFMEM SERRNOTFOUND SERRNOCONN ' + 
        'SERRNOANSWER SERRMUSTWAIT SERRIPADDR SERRHOSTNAME SERRFAILURE SERRBUSY SCROLLLOCK SCANCEL ' + 
        'SAVE SALREADY ROWS REGUSERS REGROOT REGMACHINE REGCURRENT REGCLASSES RDBLCLICK RCLICK ' + 
        'RBUTTON RAD2DEG QSUCCESSINFO QSUCCESS QSTILLEX QROLLBACK QNULL QNODATA QNEXT QNEEDDATA ' + 
        'QFIRST QCOMMIT QBADHANDLE PRINTER PLANCKJOULES PLANCKERGS PI PARSEONLY PARSEC P3ERRREPLY ' + 
        'OPEN ON OFF NUMLOCK NOWAIT NOTIFY NORMAL NORESIZE NONE NO NCSAFORMAT MULTIPLE ' + 
        'MSFORMAT MPLAYRDBLCK MPLAYRCLK MPLAYRBUTTON MPLAYMDBLCK MPLAYMCLK MPLAYMBUTTON MPLAYLDBLCK ' + 
        'MPLAYLCLK MPLAYLBUTTON MINOR MDBLCLICK MCLICK MBYESNO MBUTTON MBOKCANCEL MAJOR MAGFIELD ' + 
        'LOCALGROUP LIGHTMTPS LIGHTMPS LF LDBLCLICK LCLICK LBUTTON LAFFDBERROR ICON HTTPS HTTP ' + 
        'HNOHEADER HMETHODPOST HMETHODGET HIDDEN HHEADERONLY HHEADER GRAVITATION GOPHER GOLDENRATIO ' + 
        'GMTSEC GLOBALGROUP GFTSEC GETPROCID GETEXITCODE FWDSCAN FTPPASSIVE FTP FLOAT8 FARADAY ' + 
        'FALSE EXTENDED EULERS ENABLE ELECTRIC DRIVE DISABLE DESCENDING DEG2RAD DEFAULT CTRL ' + 
        'CRLF CR COMMONFORMAT COLUMNS CHECK CAPSLOCK CANCEL BOLTZMANN BACKSCAN AVOGADRO ATTR_X ' + 
        'ATTR_T ATTR_SY ATTR_SH ATTR_RO ATTR_RI ATTR_P ATTR_IC ATTR_H ATTR_DM ATTR_DI ATTR_DC ' + 
        'ATTR_CI ATTR_A ASCENDING ARRANGE AMC ACC_WRITE ACC_READ_NT ACC_READ_95 ACC_READ ACC_PRINT_NT ' + 
        'ACC_PMANG_NT ACC_PFULL_NT ACC_LIST ACC_FULL_NT ACC_FULL_95 ACC_DELETE ACC_CREATE ACC_CONTROL ' + 
        'ACC_CHNG_NT ACC_ATTRIB ABOVEICONS';
    
    var geshiKeywords3 = 'Yields Yield WinZoom WinWaitExist WinWaitClose WinWaitChild WinVersion WinTitle WinSysInfo ' +
        'WinState WinShow WinResources WinPositionChild WinPosition WinPlaceSet WinPlaceGet WinPlaceChild ' + 
        'WinPlace WinParmSet WinParmGet WinName WinMetrics WinItemProcId WinItemNameId WinItemizeEx ' + 
        'WinItemize WinItemChild WinIsDos WinIdGet WinIconize WinHide WinHelp WinGetactive WinExistchild ' + 
        'WinExist WinExename WinConfig WinClosenot WinClose WinArrange WinActivechild WinActivchild ' + 
        'WinActivate WebVerifyCard WebSetTimeout WebParamSize WebParamNames WebParamFile WebParamData ' + 
        'WebParamBuf WebOutFile WebOutBinary WebOut WebDumpError WebDatData WebCounter WebConSize WebConData ' + 
        'WebConBuf WebCmdData WebBaseConv Wallpaper WaitForKeyEX WaitForKey VersionDLL Version VarType ' + 
        'TimeYmdHms TimeWait TimeSubtract TimeJulToYmd TimeJulianDay TimeDiffSecs TimeDiffDays TimeDiff TimeDelay ' + 
        'TimeDate TimeAdd TextSelect TextBoxSort TextBox Terminate Tanh Tan SysParamInfo SvcWaitForCmd ' + 
        'SvcSetState SvcSetAccept StrUpper StrTrim StrSubWild StrSub StrScan StrReplace StrLower StrLenWild ' + 
        'StrLen StrIndexWild StrIndexNC StrIndex StriCmp StrFixLeft StrFixCharsL StrFixChars StrFix StrFill ' + 
        'StrCnt StrCmp StrClean StrCharCount StrCat StrByteCount Sqrt SoundVolume Sounds Snapshot Sinh Sin ' + 
        'ShortCutMake ShortCutInfo ShortCutExtra ShortCutEdit ShortCutDir ShellExecute SendMenusToEx SendMenusTo ' + 
        'SendKeysTo SendKeysChild SendKey RunZoomWait RunZoom RunWithLogon RunWait RunShell RunIconWait ' + 
        'RunIcon RunHideWait RunHide RunExit RunEnviron Run RtStatus Reload RegUnloadHive RegSetValue ' + 
        'RegSetQword RegSetMulSz RegSetExpSz RegSetEx RegSetDword RegSetBin RegQueryValue RegQueryStr ' + 
        'RegQueryQword RegQueryMulSz RegQueryKeys RegQueryKeyLastWriteTime RegQueryKey RegQueryItem RegQueryExpSz ' + 
        'RegQueryEx RegQueryDword RegQueryBin RegOpenKeyEx RegOpenKey RegOpenFlags RegLoadHive RegExistValue ' + 
        'RegExistKey RegEntryType RegDelValue RegDeleteKey RegCreateKey RegConnect RegCloseKey RegApp Random ' + 
        'PtrPersistent PtrGlobalDefine PtrGlobal Print PlayWaveform PlayMidi PlayMedia PipeServerWrite PipeServerRead ' + 
        'PipeServerCreate PipeServerClose PipeInfo PipeClientSendRecvData PipeClientOpen PipeClientClose Pause ' + 
        'ParseData ObjectTypeGet ObjectType ObjectOpen ObjectGet ObjectEventRemove ObjectEventAdd ' + 
        'ObjectCreate ObjectConstToArray ObjectConstantsGet ObjectCollectionOpen ObjectCollectionNext ' + 
        'ObjectCollectionClose ObjectClose ObjectAccess Num2Char NetInfo MsgTextGet MousePlay MouseMove MouseInfo ' + 
        'MouseDrag MouseCoords MouseClickBtn MouseClick mod Min Message Max Loge LogDisk Log10 LastError ' + 
        'KeyToggleSet KeyToggleGet ItemSortNc ItemSort ItemSelect ItemReplace ItemRemove ItemLocate ItemInsert ' + 
        'ItemExtractCSV ItemExtract ItemCountCSV ItemCount IsNumber IsLicensed IsKeyDown IsInt IsFloat IsDefined ' + 
        'Int InstallFile IniWritePvt IniWrite IniReadPvt IniRead IniItemizePvt IniItemize IniDeletePvt IniDelete ' + 
        'IgnoreInput IconReplace IconInfo IconExtract IconArrange GetTickCount GetObject GetExactTime Floor ' + 
        'FindWindow FileYmdHms FileWrite FileVerInfo FileTimeTouch FileTimeSetEx FileTimeSet FileTimeGetEx ' + 
        'FileTimeGet FileTimeCode FileSizeEx FileSize FileRoot FileRename FileRead FilePutW FilePut FilePath ' + 
        'FileOpen FileNameShort FileNameLong FileNameEval2 FileNameEval1 FileMoveAttr FileMove FileMapName ' + 
        'FileLocate FileItemPath FileItemize FileInfoToArray FileGetW FileGet FileFullname FileExtension FileExist ' + 
        'FileDelete FileCreateTemp FileCopyAttr FileCopy FileCompare FileClose FileBaseName FileAttrSetEx ' + 
        'FileAttrSet FileAttrGetEx FileAttrGet FileAppend Fabs ExtractAttachedFile Exp ExeTypeInfo Exclusive ' + 
        'EnvItemize EnvironSet Environment EndSession DosVersion DllLoad DllLastError DllHwnd DllHinst ' + 
        'DllFree DllCallCDecl DllCall Display DiskVolinfo DiskSize DiskScan DiskInfo DiskFree DiskExist ' + 
        'DirWindows DirSize DirScript DirRename DirRemove DirMake DirItemize DirInfoToArray DirHome DirGet ' + 
        'DirExist DirChange DirAttrSetEx DirAttrSet DirAttrGetEx DirAttrGet DialogProcOptions DialogObject ' + 
        'DialogControlState DialogControlSet DialogControlGet DialogBox Dialog Delay Decimals DebugTrace ' + 
        'DebugData DDETimeout DDETerminate DDERequest DDEPoke DDEInitiate DDEExecute DateTime CurrFilepath ' + 
        'CurrentPath CurrentFile CreateObject Cosh Cos ClipPut ClipHasFormat ClipGetEx ClipGet ClipAppend ' + 
        'ChrUnicodeToString ChrUnicodeToHex ChrStringToUnicode ChrSetCodepage ChrHexToUnicode ChrGetCodepage ' + 
        'Char2Num Ceiling ButtonNames BoxUpdates BoxTitle BoxTextFont BoxTextColor BoxText BoxShut BoxPen ' + 
        'BoxOpen BoxNew BoxMapmode BoxesUp BoxDrawText BoxDrawRect BoxDrawLine BoxDrawCircle BoxDestroy ' + 
        'BoxDataTag BoxDataClear BoxColor BoxCaption BoxButtonWait BoxButtonStat BoxButtonKill BoxButtonDraw ' + 
        'BoxBitMap BinaryXor BinaryXlate BinaryWriteEx BinaryWrite BinaryTagRepl BinaryTagLen BinaryTagInit ' + 
        'BinaryTagIndex BinaryTagFind BinaryTagExtr BinaryStrCnt BinarySort BinaryReplace BinaryReadEx ' + 
        'BinaryRead BinaryPokeStrW BinaryPokeStr BinaryPokeHex BinaryPokeFlt BinaryPoke4 BinaryPoke2 BinaryPoke ' + 
        'BinaryPeekStrW BinaryPeekStr BinaryPeekHex BinaryPeekFlt BinaryPeek4 BinaryPeek2 BinaryPeek BinaryOr ' + 
        'BinaryOleType BinaryIndexNc BinaryIndexEx BinaryIndexBin BinaryIndex BinaryIncrFlt BinaryIncr4 ' + 
        'BinaryIncr2 BinaryIncr BinaryHashRec BinaryFree BinaryEodSet BinaryEodGet BinaryCopy BinaryConvert ' + 
        'BinaryCompare BinaryClipPut BinaryClipGet BinaryChecksum BinaryBufInfo BinaryAnd BinaryAllocArray ' + 
        'BinaryAlloc Beep Average Atan AskYesNo AskTextbox AskPassword AskLine AskItemlist AskFont ' + 
        'AskFiletext AskFilename AskDirectory AskColor Asin ArrInitialize ArrInfo ArrDimension ' + 
        'Arrayize ArrayFilePutCSV ArrayFilePut ArrayFileGetCSV ArrayFileGet AppWaitClose AppExist AddExtender ' + 
        'Acos Abs About';
    
    var geshiKeywords4 = 'zZipFiles zVersionInfo zVersion zUnZipFiles zSetPortBit zRPortShift zPortOut zPortIn zNotPortBit ' +
        'zLPortShift zGetPortBit zClrPortBit xVerifyCCard xSendMessage xMessageBox xMemCompact xHex xGetElapsed ' + 
        'xGetChildHwnd xExtenderInfo xEnumStreams xEjectMedia xDriveReady xDiskLabelGet xCursorSet xBaseConvert ' + 
        'wxPing wxParmSet wxParmGet wxMsgSetHdr wxMsgGetHdr wxMsgGetBody wxHost2Addr wxGetLastErr wxGetInfo ' + 
        'wxGetErrDesc wxAddr2Host wtsWaitSystemEvent wtsVersion wtsTerminateProcess wtsShutdownSystem wtsSendMessage ' + 
        'wtsQuerySessionInfo wtsProcIdToSessId wtsLogoffSession wtsLastErrMsg wtsIsTSEnabled wtsIsCitrixEnabled ' + 
        'wtsGetActiveConsoleSessId wtsEnumSessions wtsEnumProcesses wtsDisconnectSession wnWrkGroups wnVersion wntWtsUserSet ' + 
        'wntWtsUserGet wntVersion wntUserSidChk wntUserSetDat wntUserRename wntUserProps wntUserList wntUserInfo ' + 
        'wntUserGetDat wntUserFiles wntUserExist wntUserDel wntUserAddDat wntUserAdd wntSvcStatus wntSvcStart ' + 
        'wntSvcList wntSvcDelete wntSvcCreate wntSvcControl wntSvcCfgSet wntSvcCfgGet wntShutdown wntShareUsers ' + 
        'wntShareSet wntShareList wntShareInfo wntShareDel wntShareAdd wntServiceInf wntServiceAt wntServerType ' + 
        'wntServerList wntServerInfo wntSecurityGet wntRunAsUser wntResources2 wntResources wntRemoteTime wntRasUserSet ' + 
        'wntRasUserGet wntProfileInfo wntProfileDel wntPrivUsers wntPrivList wntPrivGet wntPrivDel wntPrivAdd ' + 
        'wntOwnerSet wntOwnerGet wntMemberSet wntMemberLst2 wntMemberList wntMemberGrps wntMemberGet wntMemberDel ' + 
        'wntLsaPolSet wntLsaPolGet wntListGroups wntLastErrMsg wntGroupRen wntGroupInfo wntGroupEdit wntGroupDel ' + 
        'wntGroupAdd wntGetUser wntGetDrive wntGetDc wntGetCon wntFileUsers wntFilesOpen wntFileClose wntEventWrite ' + 
        'wntEventLog wntDomainSync wntDirDialog wntDfsList wntDfsGetInfo wntCurrUsers wntChgPswd wntCancelCon ' + 
        'wntAuditMod wntAuditList wntAuditGet wntAuditDel wntAuditAdd2 wntAuditAdd wntAddPrinter wntAddDrive ' + 
        'wntAcctPolSet wntAcctPolGet wntAcctList wntAcctInfo wntAccessMod wntAccessList wntAccessGet wntAccessDel ' + 
        'wntaccessadd2 wntAccessAdd wnShares wnSharePath wnShareName wnShareCnt wnServers wnRestore wnNetNames ' + 
        'wnGetUser wnGetCon wnGetCaps wnDlgShare wnDlgNoShare wnDlgDiscon wnDlgCon4 wnDlgCon3 wnDlgCon2 wnDlgCon ' + 
        'wnDlgBrowse wnDialog wnCmptrInfo wnCancelCon wnAddCon WaitSRQ w9xVersion w9xUserSetDat w9xUserRename ' + 
        'w9xUserprops w9xUserList w9xUserinfo w9xUserGetDat w9xUserExist w9xUserDel w9xUserAddDat w9xUserAdd w9xShareSet ' + 
        'w9xShareInfo w9xShareDel w9xShareAdd w9xServiceAt w9xServerList w9xRemoteTime w9xOwnerGet w9xMemberSet ' + 
        'w9xMemberList w9xMemberGrps w9xMemberGet w9xMemberDel w9xListGroups w9xGroupInfo w9xGroupDel w9xGroupAdd ' + 
        'w9xGetDC w9xFileUsers w9xAccessList w9xAccessGet w9xAccessDel w9xAccessAdd w95Version w95ShareUsers ' + 
        'w95ShareSet w95ShareList w95ShareInfo w95ShareDel w95ShareAdd w95ServiceInf w95ServiceAt w95ServerType ' + 
        'w95ServerInfo w95Resources w95GetUser w95GetDrive w95GetCon w95FileUsers w95FileClose w95DirDialog ' + 
        'w95CancelCon w95AddPrinter w95AddDrive w95AccessDel w95AccessAdd w3Version w3PrtBrowse w3NetGetUser ' + 
        'w3NetDialog w3GetCon w3GetCaps w3DirBrowse w3CancelCon w3AddCon urlGetScheme urlEncode urlDecode ' + 
        'tVersion tSetPriority TriggerList Trigger tRemoteConn tOpenProc tListProc tListMod tKillProc tGetProcInfo ' + 
        'tGetPriority tGetModInfo tGetLastError tGetData TestSys TestSRQ tCountProc tCompatible tCloseProc ' + 
        'tBrowseCntrs sSendString sSendNum sSendLine sSendBinary sRecvNum sRecvLine sRecvBinary SrchVersion ' + 
        'SrchNext SrchInit SrchFree sOpen sOK2Send sOK2Recv smtpSendText smtpSendFile sListen SetRWLS ' + 
        'SendSetup SendLLO SendList SendIFC SendDataBytes SendCmds Send sConnect sClose SByteOrder32 ' + 
        'sByteOrder16 sAccept rRegVersion rRegSearch ResetSys ReceiveSetup Receive ReadStsByte RcvRespMsg ' + 
        'RasVersion RasTypeSize RasRename RasNumCons RasNameValid RasListActCon RasItemize RasHangUp RasGetLastErr ' + 
        'RasGetConStat RasEntrySet RasEntryInfo RasEntryExist RasEntryDel RasEntryAdd RasDialInfo RasDial ' + 
        'RasCopy RasConStatus qVersionInfo qTransact qTables qSpecial qSetConnOpt qNumRsltCol qNativeSql qLastCode ' + 
        'qGetData qFreeStmt qFreeEnv qFreeConnect qFetch qExecDirect qError qDriverList qDriverCon qDisconnect ' + 
        'qDataSources qConnect qConfigError qConfigData qColumns qBindCol qAllocStmt qAllocEnv qAllocConnect ' + 
        'pWaitFor pVersionInfo pTimeout pSetPublish pSetPrtInfo pSetPrtAttrib pSetDefPrtEx pSetDefPrt pSendFile ' + 
        'pRecvFile pPutString pPutLine pPutChar pPutByte pPutBinary PPollUnconfig PPollConfig PPoll pPeekChar ' + 
        'pPeekByte pPaperSizes pPaperBins pModemSReg pModemParams pModemInit pModemHangUp pModemDial pModemControl ' + 
        'pModemConnect pModemCommand pModemAnsRing pModemAnsCall pMediaTypes pGetString pGetPublish pGetPrtList ' + 
        'pGetPrtInfo pGetPrtAttrib pGetLine pGetLastError pGetErrorMsg pGetErrorCode pGetDefPrtInf pGetChar ' + 
        'pGetByte pGetBinary pDelPrtConn pDelPrinter pComOpen pComModify pComInfo pComControl pComClose ' + 
        'pCheckSum pCheckBinary pCaptureOn pCaptureOff pCaptureLog PassControl pAddPrtConn pAddPrinter p3RecvText ' + 
        'p3RecvFile p3Peek p3Open p3GetReply p3Delete p3Count p3Close nwWhoAmI nwVfyPassword nwVersion ' + 
        'nwSrvShutdown nwSrvNLMMgr nwSrvGenGUID nwSrvExecNCF nwSetVolLimit nwSetSrvParam nwSetSrvInfo nwSetPrimServ ' + 
        'nwSetPassword nwSetOptions nwSetFileInfo nwSetDirLimit nwSetDirInfo nwSetContext nwSetBcastMode nwServerList ' + 
        'nwSendBcastMsg nwSearchObjects nwSearchFilter nwRenameObject nwRemoveObject nwReceiveBcastMsg nwNameConvert ' + 
        'nwMutateObject nwMoveObject nwModifyObject nwMapDelete nwMap nwLogout nwLogin nwListUserGroups ' + 
        'nwListObjects nwListGroupMembers nwLastErrMsg nwIsUserInGroup nwGetVolLimit nwGetSrvStats nwGetSrvParam ' + 
        'nwGetSrvInfo nwGetSrvCfg nwGetOptions nwGetObjValue nwGetObjInfo nwGetNLMInfo nwGetMapped nwGetFileInfo ' + 
        'nwGetDirLimit nwGetDirInfo nwGetContext nwGetConnInfo nwGetCapture nwGetBcastMode nwGetAttrInfo ' + 
        'nwDriveStatus nwDrivePath nwDetachFromServer nwDelUserFromGroup nwDelConnNum nwCompareObject nwClientInfo ' + 
        'nwChgPassword nwAttachToServer nwAddUserToGroup nwAddObject netVersion netResources netGetUser netGetCon ' + 
        'netDirDialog netCancelCon netAddPrinter netAddDrive n4Version n4UserGroups n4UserGroupEx n4SetPrimServ ' + 
        'n4SetOptions n4SetContextG n4SetContext n4ServerList n4ServerInfo n4ObjSearch n4ObjRename n4ObjOptions ' + 
        'n4ObjMove n4ObjGetVal n4ObjectProps n4ObjectList n4ObjectInfo n4ObjDelete n4NameConvert n4MsgsEndAll ' + 
        'n4MsgsEnd n4MemberSet n4MemberGet n4MemberDel n4MapRoot n4MapDir n4MapDelete n4Map n4LogoutTree ' + 
        'n4Logout n4Login n4GetUserName n4GetUserId n4GetUser n4GetNetAddr n4GetMapped n4GetContext ' + 
        'n4GetConnNum n4FileUsers n4FileTimeGet n4FileAttrSet n4FileAttrGet n4DriveStatus n4DrivePath n4DirTimeGet ' + 
        'n4DirAttrSet n4DirAttrGet n4Detach n4ChgPassword n4CapturePrt n4CaptureGet n4CaptureEnd n4Attach ' + 
        'n3Version n3UserGroups n3ServerList n3ServerInfo n3MsgsEndAll n3MsgsEnd n3MemberSet n3MemberGet ' + 
        'n3MemberDel n3Maproot n3Mapdir n3Mapdelete n3Map n3Logout n3GetUserId n3GetUser n3GetNetAddr ' + 
        'n3GetMapped n3GetConnNum n3FileTimeGet n3FileAttrSet n3FileAttrGet n3DriveStatus n3DrivePath ' + 
        'n3DirTimeGet n3DirAttrSet n3DirAttrGet n3Detach n3ChgPassword n3CapturePrt n3CaptureGet ' + 
        'n3CaptureEnd n3Attach mVersion mSyncMail mSendMailEx mSendMail mrecvmail mReadNextMsg mLogOn ' + 
        'mLogOff mFindNext mError mCompatible kVerInfo kStatusInfo kSendText kSendFile kManageImap4 ' + 
        'kInit kGetMail kExtra kDest kDeletePop3 iWriteDataBuf iWriteData iVersion IUrlOpen iUrlEncode ' + 
        'iUrlDecode iReadDataBuf iReadData ipVersion ipPing iPing ipHost2Addr ipGetLastErr ipGetAddress ' + 
        'iParseURL ipAddr2Host iOptionSet iOptionGet ImgWave ImgVersion ImgUnsharpMask ImgThreshold ImgSwirl ' + 
        'ImgSpread ImgSolarize ImgShear ImgSharpen ImgShade ImgScale ImgSample ImgRotate ImgResize ' + 
        'ImgReduceNoise ImgRaise ImgOilPaint ImgNormalize ImgNegate ImgMotionBlur ImgModulate ImgMinify ' + 
        'ImgMedianFilter ImgMagnify ImgLevel ImgIsValid ImgIsPalette ImgIsMono ImgIsGray ImgInfo ImgImplode ' + 
        'ImgGetImageType ImgGetColorCount ImgGaussianBlur ImgGamma ImgFrame ImgFlop ImgFlip ImgEqualize ' + 
        'ImgEnhance ImgEmboss ImgCrop ImgConvert ImgContrast ImgCompare ImgColorize ImgChop ImgCharcoal ' + 
        'ImgBorder ImgBlur ImgAddNoise iLocFindNext iLocFindInit iHttpOpen iHttpInit iHttpHeaders iHttpAccept ' + 
        'iHostConnect iHost2Addr iGetResponse iGetLastError iGetIEVer iGetConStatEx iGetConState iFtpRename ' + 
        'iFtpPut iFtpOpen iFtpGet iFtpFindNext iFtpFindInit iFtpDirRemove iFtpDirMake iFtpDirGet iFtpDirChange ' + 
        'iFtpDialog iFtpDelete iFtpCmd iErrorDialog iDialItemize iDialHangUp iDial iCookieSet iCookieGet ' + 
        'iContentURL iContentFile iContentData iClose ibWrtf ibWrt ibWait ibVersion ibUnlock ibTrg ' + 
        'ibTmo ibStop ibStatus ibSta ibSre ibSic ibSad ibRsv ibRsp ibRsc ibRpp ibRdf ibRd ' + 
        'ibPpc ibPoke ibPct ibPad ibOnl ibMakeAddr ibLock ibLoc ibLn ibLines ibIst ibInit ' + 
        'ibGts ibGetSad ibGetPad ibFind ibEvent ibErr ibEot ibEos iBegin ibDma ibDev ibConfig ' + 
        'ibCntl ibCnt ibCmda ibCmd ibClr ibCac ibBna ibAsk iAddr2Host huge_Thousands huge_Subtract ' + 
        'huge_SetOptions huge_Multiply huge_GetLastError huge_ExtenderInfo huge_Divide huge_Decimal huge_Add ' + 
        'httpStripHTML httpRecvTextF httpRecvText httpRecvQuery httpRecvQryF httpRecvFile httpGetServer ' + 
        'httpGetQuery httpGetPath httpGetFile httpGetDir httpGetAnchor httpFullPath httpFirewall httpAuth ' + 
        'ftpRename ftpQuote ftpPut ftpOpen ftpList ftpGet ftpFirewall ftpDelete ftpClose ftpChDir ' + 
        'FindRQS FindLstn EnvSetVar EnvPathDel EnvPathChk EnvPathAdd EnvListVars EnvGetVar EnvGetInfo ' + 
        'EnableRemote EnableLocal ehllapiWait ehllapiVersion ehllapiUninit ehllapiStopKeyIntercept ehllapiStopHostNotify ' + 
        'ehllapiStopCloseIntercept ehllapiStartKeyIntercept ehllapiStartHostNotify ehllapiStartCloseIntercept ' + 
        'ehllapiSetWindowStatus ehllapiSetSessionParams ehllapiSetPSWindowName ehllapiSetCursorLoc ehllapiSendKey ' + 
        'ehllapiSendFile ehllapiSearchPS ehllapiSearchField ehllapiRunProfile ehllapiResetSystem ehllapiReserve ' + 
        'ehllapiRelease ehllapiReceiveFile ehllapiQuerySystem ehllapiQueryPSStatus ehllapiQueryHostNotify ' + 
        'ehllapiQueryFieldAttr ehllapiQueryCursorLoc ehllapiQueryCloseIntercept ehllapiPostInterceptStatus ' + 
        'ehllapiPause ehllapiLastErrMsg ehllapiInit ehllapiGetWindowStatus ehllapiGetPSHWND ehllapiGetKey ' + 
        'ehllapiFindFieldPos ehllapiFindFieldLen ehllapiDisconnectPS ehllapiCvtRCToPos ehllapiCvtPosToRC ' + 
        'ehllapiCopyTextToPS ehllapiCopyTextToField ehllapiCopyTextFromPS ehllapiCopyTextFromField ehllapiCopyOIA ' + 
        'ehllapiConnectPS dunItemize dunDisconnect dunConnectEx dunConnect dsTestParam dsSIDtoHexStr dsSetSecProp ' + 
        'dsSetProperty dsSetPassword dsSetObj dsSetCredentX dsSetCredent dsRemFromGrp dsRelSecObj dsMoveObj ' + 
        'dsIsObject dsIsMemberGrp dsIsContainer dsGetUsersGrps dsGetSecProp dsGetPropName dsGetProperty ' + 
        'dsGetPrntPath dsGetPrimGrp dsGetMemGrp dsGetInfo dsGetClass dsGetChldPath dsFindPath dsDeleteObj ' + 
        'dsCreatSecObj dsCreateObj dsCopySecObj dsAddToGrp dsAclRemAce dsAclOrderAce dsAclGetAces dsAclAddAce ' + 
        'DevClearList DevClear dbTest dbSwapColumns dbSort dbSetRecordField dbSetOptions dbSetErrorReporting ' + 
        'dbSetEntireRecord dbSetDelimiter dbSave dbOpen dbNameColumn dbMakeNewItem dbInsertColumn dbGetVersion ' + 
        'dbGetSaveStatus dbGetRecordField dbGetRecordCount dbGetNextItem dbGetLastError dbGetEntireRecord ' + 
        'dbGetColumnType dbGetColumnNumber dbGetColumnName dbGetColumnCount dbFindRecord dbExist dbEasterEgg ' + 
        'dbDeleteRecord dbDeleteColumn dbDebug dbCookDatabases dbClose dbCloneRecord dbBindCol cWndState ' + 
        'cWndinfo cWndGetWndSpecName cWndGetWndSpec cWndexist cWndByWndSpecName cWndByWndSpec cWndbyseq ' + 
        'cWndbyname cWndbyid cWndbyclass cWinIDConvert cVersionInfo cVendorId cSetWndText cSetUpDownPos ' + 
        'cSetTvItem cSetTrackPos cSetTabItem cSetLvItem cSetLbItemEx cSetLbItem cSetIpAddr cSetFocus ' + 
        'cSetEditText cSetDtpDate cSetCbItem cSetCalDate cSendMessage cRadioButton cPostMessage cPostButton ' + 
        'cMemStat cGetWndCursor cGetUpDownPos cGetUpDownMin cGetUpDownMax cGetTVItem cGetTrackPos cGetTrackMin ' + 
        'cGetTrackMax cGetTbText cGetSbText cGetLvText cGetLvSelText cGetLvFocText cGetLvDdtText cGetLvColText ' + 
        'cGetLbText cGetLbSelText cGetLbCount cGetIpAddr cGetInfo cGetHrText cGetFocus cGetEditText cGetDtpDate ' + 
        'cGetControlImageCRC cGetCBText cGetCbCount cGetCalDate cFindByName cFindByClass cEnablestate cDblClickItem ' + 
        'cCpuSupt cCpuSpeed cCpuIdExt cCpuId cCpuFeat cCpuBenchmark cCloneCheck cClickToolbar cClickButton ' + 
        'cClearTvItem cClearLvItem cClearLbAll cCheckbox aVersion aStatusbar aShellFolder aMsgTimeout AllSPoll ' + 
        'aGetLastError aFileRename aFileMove aFileDelete aFileCopy';

    var geshiKeywords5 = 'wWordRight wWordLeft wWinTile wWinRestore wWinNext wWinMinimize wWinMaximize wWinCloseAll wWinClose ' +
        'wWinCascade wWinArricons wViewOutput wViewOptions wViewHtml wUpperCase wUpline wUndo wTopOfFile wToggleIns ' + 
        'wTab wStatusMsg wStartSel wSpellcheck wSetProject wSetPrefs wSetColblk wSetBookmark wSelWordRight ' + 
        'wSelWordLeft wSelUp wSelTop wSelRight wSelPgUp wSelPgDn wSelLeft wSelInfo wSelHome wSelEnd wSelectAll ' + 
        'wSelDown wSelBottom wRunRebuild wRunMake wRunExecute wRunDebug wRunConfig wRunCompile wRunCommand wRight ' + 
        'wRepeat wRedo wRecord wProperties wPrintDirect wPrinSetup wPrevError wPaste wPageUp wPageDown wNextError ' + 
        'wNewLine wLowerCase wLineCount wLeft wInvertCase wInsString wInsLine wHome wHelpKeyword wHelpKeybrd ' + 
        'wHelpIndex wHelpHelp wHelpCmds wHelpAbout wGotoLine wGotoCol wGetWrap wGetWord wGetUndo wGetSelstate ' + 
        'wGetRedo wGetOutput wGetModified wGetLineNo wGetIns wGetFilename wGetColNo wGetChar wFtpOpen wFindNext ' + 
        'wFindInFiles wFind wFileSaveAs wFileSave wFileRevert wFilePrint wFilePgSetup wFileOpen wFileNew wFileMerge ' + 
        'wFileList wFileExit wEndSel wEndOfFile wEnd wEdWrap wEdWordRight wEdWordLeft wEdUpLine wEdUndo wEdTopOfFile ' + 
        'wEdToggleIns wEdTab wEdStartSel wEdSetColBlk wEdSelectAll wEdRight wEdRedo wEdPaste wEdPageUp wEdPageDown ' + 
        'wEdNewLine wEdLeft wEdInsString wEdHome wEdGoToLine wEdGoToCol wEdGetWord wEdEndSel wEdEndOfFile wEdEnd ' + 
        'wEdDownLine wEdDelete wEdCutLine wEdCut wEdCopyLine wEdCopy wEdClearSel wEdBackTab wEdBackspace wDownLine ' + 
        'wDelete wDelButton wCutMarked wCutLine wCutAppend wCut wCopyMarked wCopyLine wCopyAppend wCopy wCompile ' + 
        'wClearSel wChange wCallMacro wBackTab wBackspace wAutoIndent wAddButton edWindowTile edWindowRestore ' + 
        'edWindowNext edWindowMinimize edWindowMaximize edWindowCloseall edWindowClose edWindowCascade edWindowArrangeIcons ' + 
        'edStatusMsg edSearchViewOutput edSearchRepeat edSearchPrevError edSearchNextError edSearchFind edSearchChange ' + 
        'edRunRebuild edRunMake edRunExecute edRunDebug edRunConfigure edRunCompile edRunCommand edRecord edHelpProcedures ' + 
        'edHelpKeyword edHelpKeyboard edHelpIndex edHelpHelp edHelpCommands edHelpAbout edGetWordWrapState edGetWindowName ' + 
        'edGetUndoState edGetSelectionState edGetRedoState edGetModifiedStatus edGetLineNumber edGetInsertState edGetColumnNumber ' + 
        'edGetChar edFileSetPreferences edFileSaveAs edFileSave edFilePrinterSetup edFilePrint edFilePageSetup edFileOpen ' + 
        'edFileNew edFileMerge edFileList edFileExit edEditWrap edEditWordRight edEditWordLeft edEditUpLine edEditUndo ' + 
        'edEditToggleIns edEditTab edEditStartSelection edEditSetColumnBlock edEditSetBookmark edEditSelectAll edEditRight ' + 
        'edEditRedo edEditPaste edEditPageUp edEditPageDown edEditLeft edEditInsertString edEditGoToLine edEditGoToColumn ' + 
        'edEditGoToBookmark edEditGetCurrentWord edEditEndSelection edEditEndOfLine edEditEndOfFile edEditDownline edEditDelete ' + 
        'edEditCutline edEditCut edEditCopyline edEditCopy edEditClearSelection edEditBeginningOfLine edEditBeginningOfFile ' + 
        'edEditBackTab edEditBackspace edDeleteButton edAddButton';

        this.regexList = [
        // REM Comments
        {   regex: /(^::|rem).*$/gmi,                               css: 'comments'},
        // "Strings", 'Strings', `Strings`, ECHO String
        {   regex: SyntaxHighlighter.regexLib.doubleQuotedString,   css: 'string'},
        {   regex: SyntaxHighlighter.regexLib.singleQuotedString,   css: 'string'},
        {   regex: /`(?:\.|(\\\`)|[^\``\n])*`/g,                    css: 'string'},
        {   regex: /echo.*$/gmi,                                    css: 'string'},
        // :Labels
        {   regex: /^:.+$/gmi,                                      css: 'color3'},
        // %Variables%, !Variables!
        {   regex: /(%|!)\w+\1/gmi,                                 css: 'variable'},
        // %%a variable Refs, %1 variable Refs
        {   regex: /%\*|%%?~?[fdpnxsatz]*[0-9a-z]\b/gmi,            css: 'variable'},
        // geshi
        {   regex: new RegExp(this.getKeywords(geshiKeywords1), 'gmi'),   css: 'batch1'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords2), 'gmi'),   css: 'batch2'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords3), 'gmi'),   css: 'batch3'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords4), 'gmi'),   css: 'batch4'},
        {   regex: new RegExp(this.getKeywords(geshiKeywords5), 'gmi'),   css: 'batch5'}
    ];
};

SyntaxHighlighter.brushes.Cmd.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Cmd.aliases = ['batch'];
