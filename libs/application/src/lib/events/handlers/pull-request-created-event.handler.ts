import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DiscordService } from '@psartech/discord';
import { PullRequestCreatedEvent } from '../pull-request-created.event';
import { Logger } from '@nestjs/common';
import {
  MessageEmbed,
  TextChannel,
} from 'discord.js';
import { ColorEmbedMessageEnum } from '../../color-embed-message-enum';

@EventsHandler(PullRequestCreatedEvent)
export class PullRequestCreatedEventHandler
  implements IEventHandler<PullRequestCreatedEvent>
{
  constructor(
    private readonly discordService: DiscordService,
    private readonly logger: Logger
  ) {}

  async handle(event: PullRequestCreatedEvent): Promise<void> {
    this.logger.log('Pull request created');
    const channel = this.discordService.guilds.cache
      .get('647173976396922885')
      .channels.cache.find(
        (channel) => channel.id == '794540996851400705'
      ) as TextChannel;
    const embedMsg = new MessageEmbed()
      .setColor(ColorEmbedMessageEnum.Created)
      .setTitle(`${event.devOpsMessage.message.text} \t\t`)
      .addFields(
        {
          name: 'Merge Status :',
          value: event.devOpsMessage.resource.mergeStatus,
          inline: true,
        },
        {
          name: 'Merge Url :',
          value: event.devOpsMessage.resource.url,
          inline: true,
        }
      )
      .setFooter({
        text: event.devOpsMessage.resource.createdBy.displayName,
        iconURL: event.devOpsMessage.resource.createdBy.imageUrl,
      })
      .setTimestamp();
    console.log(channel.name);
    await channel.send({embeds: [embedMsg]});
  }
}
