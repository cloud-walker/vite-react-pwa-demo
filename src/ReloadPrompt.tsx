import {useRegisterSW} from 'virtual:pwa-register/react'

export function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  return (
    <>
      {(offlineReady || needRefresh) && (
        <div>
          <div>
            {offlineReady ? (
              <span>App ready to work offline</span>
            ) : (
              <span>
                New content available, click on reload button to update.
              </span>
            )}
          </div>
          {needRefresh && (
            <button
              onClick={() => {
                updateServiceWorker(true)
              }}
            >
              Reload
            </button>
          )}
          <button
            onClick={() => {
              setOfflineReady(false)
              setNeedRefresh(false)
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  )
}
