/**
 * 테스크 요청 파일 업로드
 */
import {api} from "../Api";

/**
 * 테스크 작업 요청
 */
export function createTaskReq(memberId: string | null, jobName: string, taskReqFile: string) {
	return api.post("/api/taskReq", {
		memberId: memberId,
		jobName: jobName,
		taskReqFile: taskReqFile
	})
}

/**
 * 테스크 요청 파일 삭제
 */
export function deleteTaskReqFile(taskReqFile: string) {
	return api.delete("/api/taskReq?taskReqFile="+taskReqFile);
}