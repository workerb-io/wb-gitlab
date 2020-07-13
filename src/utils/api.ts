/* eslint-disable import/prefer-default-export */
import request from "./request";

interface UpdateCard {
  cardId: string;
  newCardName?: string | null;
  shouldAddDescription?: boolean;
  description?: string | null;
}

export const getAllBoards = () =>
  request.get("/1/members/me/boards?fields=name,url&");

export const createNewBoard = (name: string | null) =>
  request.post(`/1/boards/?name=${name}&`);

export const deleteBoard = (id: string) => request.delete(`/1/boards/${id}?`);

export const renameBoard = (id: string, newName: string) =>
  request.put(`/1/boards/${id}?name=${newName}&`);

export const getAllListsOfBoard = (id: string) =>
  request.get(`/1/boards/${id}/lists?`);

export const getSingleBoard = (id: string) => request.get(`/1/boards/${id}?`);

export const createNewList = (boardId: string, listName: string) =>
  request.post(`/1/lists?idBoard=${boardId}&name=${listName}&`);

export const renameList = (listId: string, listName: string) =>
  request.put(`/1/lists/${listId}?name=${listName}&`);

export const archiveList = (listId: string) =>
  request.put(`/1/lists/${listId}/closed?value=true&`);

export const getAllCardsInList = (listId: string) =>
  request.get(`/1/lists/${listId}/cards?`);

export const createNewCard = (listId: string, cardName: string | null) =>
  request.post(`/1/cards?name=${cardName}&idList=${listId}&`);

export const deleteCard = (cardId: string) =>
  request.delete(`/1/cards/${cardId}?`);

export const updateCard = ({
  cardId,
  newCardName,
  shouldAddDescription = false,
  description = "",
}: UpdateCard) =>
  request.put(
    `/1/cards/${cardId}?${
      shouldAddDescription ? `desc=${description}&` : `name=${newCardName}&`
    }`
  );

export const getAllBoardMembers = (boardId: string) =>
  request.get(`/1/boards/${boardId}/members?`);

export const addMemberToCardId = (cardId: string, memberId: string) =>
  request.post(`/1/cards/${cardId}/idMembers?value=${memberId}&`);
