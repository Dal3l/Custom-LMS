"use client";

import { createContext, useContext } from "react";

/**
 * Where a student's answer files go: set in a class lesson (the student's
 * recordings are uploaded to the class's private folder). Null elsewhere (the
 * teacher's preview: recordings stay on the device).
 */
export type AnswerPlace = { classId: string; userId: string };

export const AnswerPlaceContext = createContext<AnswerPlace | null>(null);
export const useAnswerPlace = () => useContext(AnswerPlaceContext);
