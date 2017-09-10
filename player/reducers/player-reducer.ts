import { Action, ActionReducer } from '@ngrx/store';
import { PlayerActions } from '../player-actions';
import { PlayerState, PlayerStateRecord } from './player-state';


export const initialState: PlayerState = new PlayerStateRecord() as PlayerState;


export const playerReducer: ActionReducer<PlayerState> = (state: PlayerState = initialState, {payload, type}: Action) => {
  switch (type) {

    //判断状态从而设置播放器的状态为false
    case PlayerActions.AUDIO_ENDED:
    case PlayerActions.AUDIO_PAUSED:
      return state.set('isPlaying', false) as PlayerState;

    //判断状态从而设置播放器的状态为true
    case PlayerActions.AUDIO_PLAYING:
      return state.set('isPlaying', true) as PlayerState;

    //判断状态从而设置播放器的音量
    case PlayerActions.AUDIO_VOLUME_CHANGED:
      return state.set('volume', payload.volume) as PlayerState;

    //判断状态从而设置播放器的播放列表
    case PlayerActions.PLAY_SELECTED_TRACK:
      return state.merge({
        trackId: payload.trackId, 
        tracklistId: payload.tracklistId || state.get('tracklistId')
      }) as PlayerState;

    default:
      return state;
  }
};
