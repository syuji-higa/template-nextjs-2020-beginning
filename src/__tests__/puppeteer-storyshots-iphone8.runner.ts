import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import devices from 'puppeteer/DeviceDescriptors'

const iPhone = devices['iPhone 8']

const customizePage: any = (page) => {
  return page.emulate(iPhone)
}

initStoryshots({
  suite: 'Image storyshots: iPhone 8',
  test: imageSnapshot({ customizePage })
})
