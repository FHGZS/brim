/* @flow */

import {conn} from "../test/mockLogs"
import {hideRightSidebar, showRightSidebar} from "../state/actions"
import {viewLogDetail} from "./viewLogDetail"
import MockBoomClient from "../test/MockBoomClient"
import initTestStore from "../test/initTestStore"

describe("#viewLogDetail", () => {
  let store, log, boom
  beforeEach(() => {
    boom = new MockBoomClient().stub("search")
    store = initTestStore(boom)
    log = conn()
  })

  test("when detail pane is open", () => {
    store.dispatch(showRightSidebar())
    store.dispatch(viewLogDetail(log))
    expect(store.getActions().map((a) => a.type)).toContain("SEARCH_REGISTER")
  })

  test("when detail pane is closed", () => {
    store.dispatch(hideRightSidebar())
    store.dispatch(viewLogDetail(log))
    expect(store.getActions().map((a) => a.type)).not.toContain(
      "SEARCH_REGISTER"
    )
  })
})