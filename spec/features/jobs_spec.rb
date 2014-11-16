require 'spec_helper'

feature 'Jobs' do
  scenario 'User views a failed job' do
    visit '/jobs'
    click_link 'RuntimeError: RuntimeError'

    expect(page).to have_text('Job #2')
  end

  scenario 'User deletes a job' do
    visit '/jobs/2'
    click_button 'Delete'

    expect(page).to have_text('Jobs')
  end

  scenario 'User queues a job' do
    visit '/jobs/2'
    click_button 'Run Next'

    expect(page).to have_text('Jobs')
  end

  scenario 'User invokes a job' do
    visit '/jobs/2'
    click_button 'Invoke'

    expect(page).to have_text('Jobs')
  end
end
