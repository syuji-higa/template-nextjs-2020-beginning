import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import devices from 'puppeteer/DeviceDescriptors'

const iPhone = devices['iPad']

const customizePage: any = (page) => {
  return page.emulate(iPhone)
}

initStoryshots({
  suite: 'Image storyshots: iPad',
  test: imageSnapshot({ customizePage })
})
